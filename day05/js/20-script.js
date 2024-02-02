function topla() {
  let inpSayi1El = document.querySelector("#inpSayi1");
  let inpSayi2El = document.querySelector("#inpSayi2");
  let sonucEl = document.querySelector("#pSonuc");

  //console.log(inpSayi1El.value, typeof(inpSayi1El.value))

  let sonuc = Number(inpSayi1El.value) + Number(inpSayi2El.value);
  //console.log(sonuc, typeof(sonuc))

  sonucEl.innerText = `Bu işlemin sonucu: ${sonuc}`;

  inpSayi1El.value = "";
  inpSayi2El.value = "";
}
