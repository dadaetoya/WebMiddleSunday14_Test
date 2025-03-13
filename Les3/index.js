document.addEventListener("DOMContentLoaded",async ()=>{
  let joke = document.getElementById("joke")

    setInterval(async ()=>{
        let data =  await getData();
        let div = document.createElement("div")
        div.innerText = data.punchline
        joke.appendChild(div)
        console.log(data);
    },5000)


})
async function getData() {
    let data = await fetch("https://official-joke-api.appspot.com/random_joke",{

    mode: 'no-cors',
            method: "get",
            headers: {
                 "Content-Type": "application/json"
            },
    });
    console.log(data);
    if (data.ok) {
        let arrayData = await data.json();
        return {
            type: arrayData.type, 
            setup: arrayData.setup, 
            punchline: arrayData.punchline 
        }
    }
}