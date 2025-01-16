// Function to detect mobile devices
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect based on device type
if (isMobileDevice()) {
    window.location.href = '.html';
} else {
    window.location.href = 'desktop.html';
}
