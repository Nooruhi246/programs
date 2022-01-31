const toggles = document.querySelectorAll(".toggle")
const read = document.querySelector("#read");
const watchcartoons = document.querySelector("#watchcartoons");
const creating = document.querySelector("#creating");

toggles.forEach((toggle)=>toggle.addEventListener("change",(e)=>{
    console.log(e.target)
    transitionFunc(e.target)
}))


function transitionFunc(theClickedOne){
    if(read.checked && watchcartoons.checked && creating.checked){
        if(read === theClickedOne ){
            creating.checked = false
        }
        if(watchcartoons === theClickedOne){
            read.checked = false
        }
        if(creating === theClickedOne){
            watchcartoons.checked = false
        }
    }
}