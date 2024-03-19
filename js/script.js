function formatAndDisplay() {
    var orderNumbers = document.getElementById("orderNumbers").value;
    var cleanedNumbers = orderNumbers.replace(/[^0-9\s-]/g, '');
    var numberList = cleanedNumbers.split(/[\s-]+/);
    var formattedNumbers = numberList.filter(Boolean).join(", ");
    document.getElementById("formattedNumbers").textContent = formattedNumbers;

    // Show the result section with animation
    var resultSection = document.getElementById("resultSection");
    resultSection.classList.remove("hidden");

    // Hide the input section
    var inputSection = document.getElementById("inputSection");
    inputSection.classList.add("hidden");

    // Check if the result box content exceeds a certain length
    var resultBox = document.getElementById("formattedNumbers");
    if (resultBox.textContent.length > 200) { // Example threshold value
        resultBox.style.height = "150px"; // Set a fixed height
        resultBox.style.overflowY = "auto"; // Add vertical scroll
    } else {
        resultBox.style.height = "auto"; // Allow auto height if content is shorter
        resultBox.style.overflowY = "hidden"; // Hide scroll if not needed
    }

    // Show notification
    var notification = document.getElementById("notification");
    notification.textContent = "Numbers formatted successfully!";
    notification.classList.add("success");
    notification.style.display = 'block'; // Show the notification
    setTimeout(() => {
        notification.textContent = "";
        notification.classList.remove("success");
        notification.style.display = 'none'; // Hide the notification after 3 seconds
    }, 3000);

    return false; // Prevent form submission and page refresh
}


function copyToClipboard() {
    var formattedNumbers = document.getElementById("formattedNumbers").textContent;
    navigator.clipboard.writeText(formattedNumbers).then(() => {
        var notification = document.getElementById("notification");
        notification.textContent = "Formatted numbers copied to clipboard!";
        notification.classList.add("success");
        notification.style.display = 'block'; // Show the notification
        setTimeout(() => {
            notification.textContent = "";
            notification.classList.remove("success");
            notification.style.display = 'none'; // Hide the notification after 3 seconds
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy formatted numbers to clipboard:', err);
    });
}

function resetForm() {
    // Clear the text area and formatted numbers
    document.getElementById("orderNumbers").value = "";
    document.getElementById("formattedNumbers").textContent = "";

    // Hide the result section and show the input section
    var resultSection = document.getElementById("resultSection");
    resultSection.classList.add("hidden");
    var inputSection = document.getElementById("inputSection");
    inputSection.classList.remove("hidden");

    // Clear the notification
    var notification = document.getElementById("notification");
    notification.textContent = "";
    notification.classList.remove("success", "warning", "error");

    // Reset the result box style
    var resultBox = document.getElementById("formattedNumbers");
    resultBox.style.height = "auto"; // Reset height
    resultBox.style.overflowY = "hidden"; // Reset overflow

    // Show notification
    var notification = document.getElementById("notification");
    notification.textContent = "Form cleared successfully!";
    notification.classList.add("success");
    notification.style.display = 'block'; // Show the notification
    setTimeout(() => {
        notification.textContent = "";
        notification.classList.remove("success");
        notification.style.display = 'none'; // Hide the notification after 3 seconds
    }, 3000);
}
