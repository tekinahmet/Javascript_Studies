//! arrow function practice

const hesapla = (price, tax, discount) => {
  //!nullish coalescing
  price ??= 0; //! price = price ?? 0
  tax ??= 0; //! tax = tax ?? 0
  discount ??= 0; //! discount = discount ?? 0

  return price - (price * tax) / 100 - (price * discount) / 100;
};
let sonuc = hesapla(100, 18, 10);
console.log(sonuc);

const sonucGoster = () => {
  let fiyat = document.querySelector("#fiyat");
  let fiyatValue = Number(fiyat.value);

  let kdv = document.querySelector("#kdv");
  let kdvValue = Number(kdv.value);

  let indirim = document.querySelector("#indirim");
  let indirimValue = Number(indirim.value);

  let totalResult = hesapla(fiyatValue, kdvValue, indirimValue);

  document.getElementById("sonuc").innerHTML = ` sonuc: ${totalResult}`;
};
