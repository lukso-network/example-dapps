async function connectWeb3() {
  let accoutnsArray = [];
  // Check if Browser is Chrome or Firefox
  if (
    navigator.userAgent.indexOf("Firefox") != -1 ||
    navigator.userAgent.indexOf("Chrome") != -1
  ) {
    // Check if browser extension is installed and logged in (address is available)
    try {
      // Get accounts
      if (window.ethereum) {
        // Enable Login button functionality
        el("#loginbutton").addEventListener("click", async function () {
          await ethereum.request({ method: "eth_requestAccounts" });
          el("#login").style.display = "none";
          // Rerun dApp after login
          await dApp();
        });

        // Request accounts
        try {
          accoutnsArray = await ethereum.request({ method: "eth_accounts" });
        } catch (e) {
          // Universal Profile Extension detected and locked
          if (e.code == 4100) {
            // Login to be able to request accounts
            el("#login").style.display = "block";
            return false;
          }
        }
      }

      // Login if no accounts were found
      if (!accoutnsArray.length) {
        el("#login").style.display = "block";
        return false;
      } else {
        return true;
      }
    } catch (e) {
      // Provider not set or invalid
      el("#install").style.display = "block";
      return false;
    }
  }
  // Browser is not supported
  else {
    el("#browser").style.display = "block";
    return false;
  }
}

async function checkNetwork() {
  // Access web3
  const web3 = new Web3(window.ethereum);

  // If its MetaMask, check if network is the right one
  if (window.ethereum.isMetaMask) {
    const networkID = await web3.eth.net.getId();
    const networkHost = await web3.eth.net._provider.host;

    // Check if the right network is configured
    if (networkID !== 22 && networkHost !== "https://rpc.l14.lukso.network") {
      el("#network").style.display = "block";
      return false;
    }
    return true;
  }
  return true;
}
