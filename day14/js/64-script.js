import { countries } from "../data/countries.js";
//console.log(countries)
const loadData = () => {
  let selectOption = "";
  for (let country of countries) {
    //country.name.common
    selectOption += `<option value="${country.name.common}">${country.name.common}</option>`;
  }
  document.getElementById("selectID").innerHTML = selectOption;
  return selectOption;
};
loadData();
