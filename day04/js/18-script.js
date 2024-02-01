let h1El = document.querySelector(".title");
console.log(h1El);

let h1Text = h1El.innerText;
console.log(h1Text);

//birinci kullanım
/* let messageEl = document.querySelector(".message")
messageEl.innerText=`Merhaba ${h1Text}` */

//ikinci kullanım
document.querySelector(".message").innerHTML = `<b>Merhaba ${h1Text}</b>`;
