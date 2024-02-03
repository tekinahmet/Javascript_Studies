function hesapla() {
  let inpEl = document.querySelector("#inp");
  let inpValue = Number(inpEl.value);
  if (inpValue > 500) {
    inpValue *= 0.9;
  } else if (inpValue > 300) {
    inpValue *= 0.93;
  } else {
    inpValue *= 0.95;
  }
  document.querySelector(
    ".result"
  ).innerHTML = `Toplam odemeniz gereken tutar: ${inpValue.toFixed(2)} ₺dir  `;
  inpEl.value = "";
}
