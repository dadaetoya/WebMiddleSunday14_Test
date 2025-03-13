let main_container = document.getElementById("main_container");
let btn = document.getElementById("btn");
let punchlineP = document.getElementById("punchline");
let setupP = document.getElementById("setup")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    getJoke();

})

async function getJoke() {
    let promise = new Promise(async (res, rej)=>{
        let data = await fetch("https://official-joke-api.appspot.com/random_joke")
        if (data.ok) {
            let json =  await data.json();
            res(json);
        }
        else{
            rej(data)
        }
    });
    promise.then((data)=>{
        console.log(data);
        let {id,punchline,setup,type}= data;
        punchlineP.innerText = punchline
        setupP.innerText = setup
     
 
    })
}

