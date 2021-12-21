//?Exo1 
let h3 = document.getElementsByTagName("div")[0].firstElementChild
console.log(h3); 
//?Exo2
let titreNiv3 = document.getElementsByTagName("h3")[1]
console.log(titreNiv3);

//?Exo3
let div = titreNiv3.previousElementSibling
console.log(div);

//?Exo4
let grandPara = document.getElementsByClassName("petitParagraphe")[0].nextElementSibling
console.log(grandPara);

//?Exo5
// let parentImp = document.getElementsByClassName("important")[0].parentElement
// let parentImp = document.getElementById("listElements")
// console.log(parentImp);
let parentImp = document.getElementsByTagName("li")[0].parentElement
console.log(parentImp);
//?Exo6
console.log(parentImp.firstElementChild);

//?Exo7
// let lastImp = document.getElementsByClassName("important")[3]
// console.log(lastImp.nextElementSibling);
let lastImp = document.getElementsByTagName("li")[3].nextElementSibling
console.log(lastImp);
//?Exo8
let textGen = document.getElementById("textGeneral").nextElementSibling
console.log(textGen);

//?Exo9
// let footer = document.getElementById("footer")
let p = footer.getElementsByTagName("span")[0].parentElement
console.log(p);
let spanP = p.nextElementSibling
console.log(spanP);

//?Exo10
let bN = footer.getElementsByTagName("b")[1]
let bP = bN.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild
console.log(bN.innerText);
console.log(bP.innerText);

//?Exo11
let exo11 = document.querySelector(".grandParagraphe").innerText
console.log(exo11);

//?Exo12
let il = document.querySelectorAll("li")
il.forEach(element => {
    console.log(element.innerText);
});


