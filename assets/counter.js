// Function to increment and display the visitor count
function incrementAndDisplayCount() {
    // Get the current count from local storage, default to 0 if not set
    let currentCount = parseInt(localStorage.getItem('visitorCount')) || 0;

    // Get the current IP address
    let currentIP = getIPAddress();

    // Log the IP to the file (entered-ips.txt)
    logEnteredIP(currentIP);

    // Increment the count
    currentCount++;

    // Update the local storage with the new count
    localStorage.setItem('visitorCount', currentCount);

    // Update the span element with the new count
    document.getElementById('visitorCount').textContent = currentCount;
}

// Function to reset the visitor count
function resetVisitorCount() {
    // Reset the count in local storage
    localStorage.setItem('visitorCount', 0);

    // Update the span element with the new count (0)
    document.getElementById('visitorCount').textContent = 0;
}

// Function to get the current IP address (you may need a more robust solution)
function getIPAddress() {
    // Replace this with a proper method to get the user's IP address
    // This is just a placeholder
    return '127.0.0.1';
}

// Function to log the entered IP to a file (entered-ips.txt)
function logEnteredIP(ip) {
    // You may need a server-side script to handle the file writing
    // This is a simplified example for demonstration purposes
    // Appending IP to the file each time the function is called
    let fs = require('fs');
    fs.appendFileSync('/entered-ips.txt', ip + '\n');
}

// Call the increment function when the page loads
window.onload = function () {
    incrementAndDisplayCount();
};
