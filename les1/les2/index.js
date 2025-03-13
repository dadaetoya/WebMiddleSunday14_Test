let API = "http://universities.hipolabs.com/search?country=";
let cards = document.getElementById("cards");
let btn = document.getElementById("btn");
let country = document.getElementById("country");
let load = document.getElementById("load");
let pags = document.getElementsByClassName("li_pagination")
async function getDataAPI(datas,index) {
    
        let countCards = (index+1)*6;
        let startIndex = countCards-6
        let data = await fetch(API+datas);
        if (data.ok) {
            let dataOK = await data.json();
            
            dataOK = Array.from(dataOK)
                .filter((val,index)=>index>=startIndex&&index<countCards)
            load.style.display="none";
            let arr = Array.from(dataOK).reduce((buf, elem)=>{
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
            cards.innerHTML = arr
        }
}
btn.addEventListener("click",(e)=>{
    load.style.display="block";
    e.preventDefault();
    let val = country?.value||"Belarus"; 
    getDataAPI(val, 0);
    Array.from(pags).forEach((elem,index)=>{
        elem.addEventListener('click',(e)=>{
            e.preventDefault()
            getDataAPI(val, index);
        })
    })
})



