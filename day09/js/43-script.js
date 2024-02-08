//! declaration function
function lenghtBul() {
  return value.lenght;
}
console.log("merhaba");

//! expression function
let topla = function (a, b) {
  return a + b;
};
console.log(topla(5, 6));

let result = topla(5, 15);
console.log(result);

//! arrow function
let carp = (a, b) => a * b;
console.log(carp(5, 6));

//! nfn ==> const first = (second) => { third }

const firstLetter = (str) => {
  let letter = str.charAt(str.lenght - 1);
  return letter;
};
console.log(firstLetter("ahmet"));

const findSubstring = (param) => {
  let sonuc = param.substring(1, 3);
  return sonuc;
};
console.log(findSubstring("ahmet"));
