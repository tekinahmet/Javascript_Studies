let textEl = document.querySelector("#text");

let inputEl = textEl.value;
console.log(inputEl);

let msg = (document.querySelector("#message").value = `Hello ${inputEl}`);
console.log(msg);
