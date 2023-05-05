let decrementbtn = document.getElementsByClassName("decrement");
let incrementbtn = document.getElementsByClassName("increment");
let value = document.getElementsByClassName("value");
let resetbtn = document.getElementsByClassName("reset");

console.log(value.innerText);

let incre = function(){
    value.innerText = value.innerText+1;
    return value.innerText;
}
let decre = function(){
    value.innerText = value.innerText-1;
    return value.innerText;
}
let reset = function(){
    value.innerText = 0;
    return value.innerText;
}
document.decrementbtn.addEventListener("onclick",decre);
incrementbtn.addEventListener("onclick",incre);
resetbtn.addEventListener("onclick",reset);
