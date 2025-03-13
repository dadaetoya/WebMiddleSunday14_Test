let API = "http://universities.hipolabs.com/search?country=";
let cards = document.getElementById("cards");
let btn = document.getElementById("btn");
let listPag = document.getElementById("listPag");
let country = document.getElementById("country");
let load = document.getElementById("load");
let pags = document.getElementsByClassName("li_pagination");


function createPaginator(count = 2) {
    let resultPag = new Array(count).fill();
    let itogPag = resultPag.reduce((buf, val, index)=>{
            buf+=`<li class="li_pagination">${index+1}</li>`;
            return buf;
    },"")
    listPag.innerHTML = itogPag;
    addEventListenerPag();
}

const saveData = (key,datas)=>{
    let map = new Map()
    map.set(key, datas);
    localStorage.setItem(key,JSON.stringify(datas));
}

async function getDataAPI(datas,index) {
        let countCards = (index+1)*6;
        let startIndex = countCards-6;

       let data;
        if (localStorage.getItem(datas)) {
            data = JSON.parse(localStorage.getItem(datas)||"[]")
            console.log("Cash");
            load.style.display="none";
        }
        else{
           let dataFetch = await fetch(API+datas);
            console.log("fetch");
            if (dataFetch.ok) {
                data = await dataFetch.json();
                saveData(datas, data);
            }
        } load.style.display="none";
        let countPag = Math.ceil(Array.from(data).length/6);
        console.log(countPag);
        
            createPaginator(countPag);
            data = Array.from(data)
                .filter((val,index)=>index>=startIndex&&index<countCards);
           
           
            let arr = Array.from(data).reduce((buf, elem)=>{
                buf+=`
                <a class="card" href="${elem.web_pages[0]}">
                    <div class="order">
                        <div class="dish">${elem.name}</div>
                        <div class="adress">${elem.country}</div/>
                        <div class="telephone">${elem.domains[0]}</div>
                    </div>
                </a>`
            return buf
            },"");
            console.dir(cards);
            cards.innerHTML = arr;
}

btn.addEventListener("click",(e)=>{
    let val = country?.value||"Belarus"; 
    getDataAPI(val, 0);
    e.preventDefault();
    addEventListenerPag();
 
});

function addEventListenerPag() {
    // load.style.display="none";
    let val = country?.value||"Belarus"; 
    let pags = document.getElementsByClassName("li_pagination")
    console.log(pags);
    Array.from(pags).forEach((elem,index)=>{
        elem.addEventListener('click',(e)=>{
            e.preventDefault();
            getDataAPI(val, index);
        })
    })
}


