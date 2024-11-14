// Detect the operating system
const os = navigator.userAgent.toLowerCase();
const windowsWarning = document.getElementById("windowsWarning");
const windowsHide = document.querySelectorAll(".windows-hide");

// Check if the OS is Windows
if (os.includes("win")) {
    // Display warning and hide special content for non-Windows users
    windowsWarning.classList.remove("hidden");
    windowsHide.forEach(element => {
        element.classList.add("hidden");
    });
} else {
    // If not Windows, show normal content and hide warning
    windowsWarning.classList.add("hidden");
    windowsHide.forEach(element => {
        element.classList.remove("hidden");
    });
}