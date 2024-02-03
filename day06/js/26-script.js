function hesapla() {
  let inpEl = document.querySelector("#inp");
  let inpValue = Number(inpEl.value);
  let resultEl = document.querySelector(".result");
  let discount;
  switch (true) {
    case inpValue > 1500:
      discount = 15;
      break;
    case inpValue > 1000:
      discount = 13;
      break;
    case inpValue > 700:
      discount = 10;
      break;
    case inpValue > 500:
      discount = 7;
      break;
    case inpValue > 300:
      discount = 5;
      break;
    default:
      discount = 2;
  }
  let totalPrice = inpValue - (inpValue * discount) / 100;
  resultEl.innerHTML = ` indirim sonucu odemeniz gereken tutar: ${totalPrice.toFixed(
    2
  )} `;
  inpEl.value = "";
}
