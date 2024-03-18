function formatAndDisplay() {
    var orderNumbers = document.getElementById("orderNumbers").value;
    var originalNumbers = orderNumbers;
    var cleanedNumbers = orderNumbers.replace(/[^0-9\s-]/g, '');
    var numberList = cleanedNumbers.split(/[\s-]+/);
    var formattedNumbers = numberList.filter(Boolean).join(", ");
    document.getElementById("formattedNumbers").textContent = formattedNumbers;

    // Harf algılama uyarısı
    if (cleanedNumbers !== originalNumbers) {
        alert("Warning: Letters detected and removed.");
    }

    // Panoya kopyalama ve başarı/hata bildirimi
    navigator.clipboard.writeText(formattedNumbers)
        .then(() => {
            alert("Formatted numbers copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy formatted numbers to clipboard.");
            console.error('Failed to copy formatted numbers to clipboard:', err);
        });

    return false; // Form gönderimini ve sayfa yenilenmesini engelle
}
