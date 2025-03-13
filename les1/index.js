import { drawRows } from "./javascript/draw.js";
let list = document.getElementById("list")
let btn = document.getElementById("btn")

btn.addEventListener("click",drawRows)

window.addEventListener('load',()=>{
   let arrayLocalStorage =  getElementsFromLocalStorage();
   console.log(arrayLocalStorage);
   let res = [...arrayLocalStorage].reduce((buf, elem, index,arr)=>{
    console.log(res);
        buf+=`<div class="order">
            <div class="dish">${elem.dish}<div/>
            <div class="time">${elem.time}<div/>
            <div class="adress">${elem.adress}<div/>
            <div class="telephone">${elem.telephone}<div/>
        </div>`
        return buf;

    });
    console.log(res);
    list.innerHTML += res

})


function getElementsFromLocalStorage() {
    let data = localStorage.getItem("table")||"[]";
    let array = JSON.parse(data);
    return array;
    
}


