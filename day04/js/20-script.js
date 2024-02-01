function sayHello() {
  let nameEl = document.querySelector("#name");
  let name = nameEl.value;
  let message = `selam sana ${name}`;
  alert(message);
  console.log(message);
}
