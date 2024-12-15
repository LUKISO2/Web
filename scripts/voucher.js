document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn');
  const voucherInput = document.getElementById('voucher-input');
  const errorMessage = document.getElementById('error-message');


  function handleSubmit() {
    const voucherCode = voucherInput.value.trim();
    if (voucherCode === "5318008") {
      window.location.href = "5318008.html";
    } else {
      errorMessage.textContent = "Nesprávný kód. Zkuste to prosím znovu.";
      errorMessage.style.display = "block";
    }
  }

  // Click the button
  submitBtn.addEventListener('click', handleSubmit);

  // Press Enter while focusing on the input
  voucherInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  });
});
