// Function to increment and display the visitor count
function incrementAndDisplayCount() {
    // Get the current count from local storage, default to 0 if not set
    let currentCount = parseInt(localStorage.getItem('visitorCount')) || 0;

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

// Call the increment function when the page loads
window.onload = function () {
    incrementAndDisplayCount();
};
