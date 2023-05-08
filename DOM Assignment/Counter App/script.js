let decrementbtn = document.getElementById("decrement");
let incrementbtn = document.getElementById("increment");
let value = document.getElementById("value");
let resetbtn = document.getElementById("reset");

console.log(value.innerText);

let incre = function(){
    value.innerText = Number(value.innerText)+1;
    return value.innerText;
}
let decre = function(){
    value.innerText = Number(value.innerText)-1;
    return value.innerText;
}
let reset = function(){
    value.innerText = 0;
    return value.innerText;
}

decrementbtn.addEventListener("click",decre);
incrementbtn.addEventListener("click",incre);
resetbtn.addEventListener("click",reset);
