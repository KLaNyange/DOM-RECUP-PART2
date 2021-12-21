//?Exo1
let div = document.querySelector("#content")
console.log(div);

//?Exo2
let content = document.querySelectorAll("#content")
console.log(content);

//?Exo3
let li = document.querySelector(".important")
console.log(li);


//?Exo4
let li2 = document.querySelectorAll(".important")
console.log(li2);

//?Exo5
let allLi = document.querySelectorAll("li")
console.log(allLi);
allLi.forEach(element => {
    console.log(element.innerText.slice(0, -1) + element.innerText.charAt(element.innerText.length-1).toUpperCase());
});

//?Exo6
// let divId = document.getElementById("content")
// let paraClass = divId.getElementsByClassName("grandParagraphe")[0]
// console.log(paraClass);
let para = div.getElementsByClassName("grandParagraphe")[0]
console.log(para);



