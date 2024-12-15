document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn');
  const voucherInput = document.getElementById('voucher-input');

  function handleSubmit() {
    const voucherCode = voucherInput.value.trim();
    if (voucherCode === "5318008") {
      window.location.href = "5318008.html";
    } else {
      alert("Nesprávný kód. Zkuste to prosím znovu.");
    }
  }

  // Click the button
  submitBtn.addEventListener('click', handleSubmit);

  // Press Enter while focusing on the input
  voucherInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSubmit();
    }
  });
});
