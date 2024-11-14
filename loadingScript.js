window.onload = function() {
  // Simulate loading for 3 seconds
  setTimeout(function() {
    // Hide the loading screen and show system info
    document.getElementById('loadingScreen').classList.add('hidden');
    document.getElementById('systemInfo').classList.remove('hidden');

    // Get system information
    const userAgent = navigator.userAgent;
    let os = "Unknown";
    let isWindows = false;
    let isBlackberry = false;

    // Detect Operating System
    if (userAgent.indexOf('Windows NT') !== -1) {
      os = "Windows";
      isWindows = true;
    } else if (userAgent.indexOf('Mac OS X') !== -1 && userAgent.indexOf('iPhone') === -1 && userAgent.indexOf('iPad') === -1) {
      os = "macOS";
    } else if (userAgent.indexOf('Linux') !== -1) {
      os = "Linux";
    } else if (/iPhone|iPad|iPod/.test(userAgent)) { // Improved iOS detection
      os = "iOS";
    } else if (userAgent.indexOf('Android') !== -1) {
      os = "Android";
    } else if (userAgent.indexOf('BlackBerry') !== -1 || userAgent.indexOf('BB10') !== -1) {
      os = "BlackBerry";
      isBlackberry = true;
    }

    // Display the operating system
    document.getElementById('os').innerText = os;

    // Show the "ew..." message if user is on Windows
    if (isWindows) {
      document.getElementById('windowsMessage').style.display = 'block';
    }

    // Show the ":3" message if user is on BlackBerry
    if (isBlackberry) {
      document.getElementById('blackberryMessage').style.display = 'block';
    }


    // Redirect to main.html after 3 seconds
    setTimeout(function() {
      window.location.href = 'main.html'; // Redirect to main.html
    }, 3000); // Adjust time as needed
  }, 3000); // Simulate loading for 3 seconds
};