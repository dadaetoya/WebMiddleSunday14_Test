const arr = []; // массив для хранения строк
let dish = document.getElementById("Dish")
let time = document.getElementById("Time")
let adress = document.getElementById("Adress")
let telephone = document.getElementById("Telephone")
let list = document.getElementById("list")
function drawRows(e) {
    let obj = {
        dish:dish.value,
        time:time.value,
        adress:adress.value,
        telephone:telephone.value
    }
    arr.push(obj);
    saveVal(arr);

    let elem = document.createElement("div")
    elem.classList.add("order")
    
    let dishOrder = document.createElement("div")
    dishOrder.classList.add("dish")
    dishOrder.innerText = obj.dish
    
    let timeOrder = document.createElement("div")
    timeOrder.classList.add("time")
    timeOrder.innerText = obj.time
    
    let adressOrder = document.createElement("div")
    adressOrder.classList.add("adress")
    adressOrder.innerText = obj.adress
    
    let phoneOrder = document.createElement("div")
    phoneOrder.classList.add("phone")
    phoneOrder.innerText = obj.telephone

    elem.appendChild(dishOrder)
    elem.appendChild(timeOrder)
    elem.appendChild(adressOrder)
    elem.appendChild(phoneOrder)
    list.appendChild(elem)
}

function saveVal(data) {
    localStorage.setItem("table",JSON.stringify(data))
}

export {drawRows}