// ============================================
// APNI DETAILS YAHAN BHAREIN
// ============================================
const UPI_ID = "sherrohit2@axl";      // apni UPI ID
const PAYEE_NAME = "Sher Rohit";       // apna naam
const AMOUNT = "30.00";                // fixed ₹30
const CURRENCY = "INR";

// UPI deep link generate karein
const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${AMOUNT}&cu=${CURRENCY}`;

// Free QR API ka use karke Image ka URL banayein
const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}`;

window.onload = function () {
  // Image tag me URL daal dein
  document.getElementById("qrImage").src = qrApiUrl;
  
  // UPI ID text display karein
  document.getElementById("upiIdText").innerText = UPI_ID;
};
