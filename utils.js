async function connectWeb3() {

    // Check if Browser is Chrome or Firefox
    if (
      navigator.userAgent.indexOf("Firefox") != -1 ||
      navigator.userAgent.indexOf("Chrome") != -1
    ) {
      
      // Check if browser extension is installed
      try {
  
        // Get account
        if (window.ethereum) {
  
          // Request account
          let account = await ethereum.request({ method: "eth_accounts" });
  
          // If no account was found
          if (!account.length) {
            
            // Enable login button functionality
            el("#loginbutton").addEventListener("click", async function () {
  
              // Request login of extension
              await ethereum.request({ method: "eth_requestAccounts" });
  
              // Hide button after login was successful
              el("#login").style.display = "none";
  
              // Rerun dApp with logged-in extension
              await dApp();
            });
  
            // Show login button 
            el("#login").style.display = "block";
            return false;
          } 
          else {
            return true;
          }
        }
      
      // Provider not set or invalid
      } catch (e) {
  
        // Show install extension notice
        el("#install").style.display = "block";
        return false;
      }
    }
    // Browser is not supported
    else {
  
      // Show unsupported browser notice
      el("#browser").style.display = "block";
      return false;
    }
  }