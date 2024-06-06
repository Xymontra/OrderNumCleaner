function formatAndDisplay() {
    const orderNumbers = document.getElementById("orderNumbers").value;

    // Split the input into parts by commas or spaces
    const numberParts = orderNumbers.split(/,\s*|\s+/);

    // Analyze each part and combine valid digits
    const cleanedNumbers = numberParts.map(part => {
        // Remove non-digit characters and combine only digits
        return part.replace(/[^\d]/g, '');
    }).filter(Boolean); // Filter out empty strings

    // Join the parts with a comma
    const formattedNumbers = cleanedNumbers.join(", ");

    document.getElementById("formattedNumbers").textContent = formattedNumbers;

    // Show the result section with animation
    const resultSection = document.getElementById("resultSection");
    resultSection.classList.remove("hidden");

    // Hide the input section
    const inputSection = document.getElementById("inputSection");
    inputSection.classList.add("hidden");

    // Check if the result box content exceeds a certain length
    const resultBox = document.getElementById("formattedNumbers");
    if (resultBox.textContent.length > 200) { // Example threshold value
        resultBox.style.height = "150px"; // Set a fixed height
        resultBox.style.overflowY = "auto"; // Add vertical scroll
    } else {
        resultBox.style.height = "auto"; // Allow auto height if content is shorter
        resultBox.style.overflowY = "hidden"; // Hide scroll if not needed
    }

    // Show notification
    const notification = document.getElementById("notification");
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
    const formattedNumbers = document.getElementById("formattedNumbers").textContent;
    navigator.clipboard.writeText(formattedNumbers).then(() => {
        const notification = document.getElementById("notification");
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
    const resultSection = document.getElementById("resultSection");
    resultSection.classList.add("hidden");
    const inputSection = document.getElementById("inputSection");
    inputSection.classList.remove("hidden");

    // Clear the notification
    const notification = document.getElementById("notification");
    notification.textContent = "";
    notification.classList.remove("success", "warning", "error");

    // Reset the result box style
    const resultBox = document.getElementById("formattedNumbers");
    resultBox.style.height = "auto"; // Reset height
    resultBox.style.overflowY = "hidden"; // Reset overflow

    // Show notification
    notification.textContent = "Form cleared successfully!";
    notification.classList.add("success");
    notification.style.display = 'block'; // Show the notification
    setTimeout(() => {
        notification.textContent = "";
        notification.classList.remove("success");
        notification.style.display = 'none'; // Hide the notification after 3 seconds
    }, 3000);
}

// JavaScript remains unchanged but will work with the updated HTML and CSS
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animated-text');
    const cursorElement = document.querySelector('.typing-cursor');
    const smileIconHtml = `<i class="fas fa-smile typing-icon"></i>`;
    const fullText = "Changelog";
    let index = 0;
    let isAdding = true;
    const delayBetweenCycles = 10000; // Increase delay after text is completed

    function typeEffect() {
        if (isAdding) {
            if (index < fullText.length) {
                textElement.innerHTML = fullText.slice(0, index + 1); // Update text without icon
                index++;
            } else {
                textElement.innerHTML = fullText + smileIconHtml; // Add smile icon at the end
                isAdding = false;
                setTimeout(typeEffect, delayBetweenCycles); // Wait for a while before deleting
                return;
            }
        } else {
            if (index > 0) {
                textElement.innerHTML = fullText.slice(0, index - 1); // Remove text gradually
                index--;
            } else {
                isAdding = true;
                setTimeout(typeEffect, 500); // Wait before starting again
                return;
            }
        }
        setTimeout(typeEffect, isAdding ? 200 : 100);
    }

    setTimeout(typeEffect, 500);

    // Blink cursor effect
    function blinkCursor() {
        cursorElement.classList.toggle('hidden');
        setTimeout(blinkCursor, 1000); // Slow down blinking to 1 second
    }

    blinkCursor();
});