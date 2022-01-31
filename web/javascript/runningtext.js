const textEl=document.querySelector(".text")
const speedEl=document.getElementById("speed")

const text="We Love Programming!"
let index=1
let time=500/speedEl.value
writetext()

function writetext(){
    textEl.innerHTML=text.slice(0,index)
    index++
    if(index>text.length)
    index=1
    setTimeout(writetext,time)
}
speedEl.addEventListener("input",(e)=>{
    time=500/e.target.value
})