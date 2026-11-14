// ============================================
// APNI DETAILS YAHAN BHAREIN
// ============================================
const UPI_ID = "sherrohit2@axl";      // apni UPI ID
const PAYEE_NAME = "Sher Rohit";       // apna naam
const AMOUNT = "30.00";                // fixed ₹30
const CURRENCY = "INR";

// UPI deep link generate karein
const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${AMOUNT}&cu=${CURRENCY}`;

// Page load hone par QR code render karein
window.onload = function () {
  const canvas = document.getElementById("qrCanvas");

  QRCode.toCanvas(canvas, upiLink, {
    width: 220,
    margin: 2,
    color: {
      dark: "#1a1a1a",
      light: "#ffffff"
    }
  }, function (error) {
    if (error) {
      console.error("QR Code generation failed:", error);
      alert("QR Code generate nahi hua. Please refresh karein.");
    }
  });

  // UPI ID text display karein
  document.getElementById("upiIdText").innerText = UPI_ID;
};
