let name = "Ali";
console.log(name);

(() => {
  let name = "Ali";
  console.log(name);
  let z = 12;
  console.log(z);
})();

/* ((){ })() */

(function () {
  let name = "Ali";
  console.log(name);
  let z = 12;
  console.log(z);
})();