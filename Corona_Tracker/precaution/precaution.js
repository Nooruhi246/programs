const prev = document.getElementById("prev")
const progress = document.getElementById("progress")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1
let numberOfCircles = circles.length

// next.addEventListener("click",()=>{
//     currentActive++;

//     if(currentActive>numberOfCircles){
//         currentActive = numberOfCircles
//     }
//     console.log(currentActive)
//     updateCSS()
// })

// prev.addEventListener("click",()=>{
//     currentActive--;

//     if(currentActive<1){
//         currentActive = 1
//     }
//     console.log(currentActive)
//     updateCSS()

// })

function enableDisable(){

    if(currentActive===1){
        prev.disabled = true
    }else if(currentActive===numberOfCircles){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

function updateCSS(){
    for(var i=0;i<numberOfCircles;i++){
        const circle = circles[i]

        if(i<currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    }

    const activesxyz = document.querySelectorAll(".active")

    // Calculate width
    // Set progress bar width = formula
    const widthxyz = (activesxyz.length-1)/(circles.length-1)*100

    progress.style.width = widthxyz + "%"
    enableDisable()

}

const data = [
    {
        text: "Very First Step",
        src: "../images/onlinedoctor.jpg",
        par:"Stay at home and call your local health service. Don't visit a clinic."
    },
    {
        text: "Take a Guidance",
        src: "../images/guidance.png",
        par:"They will tell you if you need to take a COVID-19 test and how to do it."
    },
    {
        text: "Home Isolation",
        src: "../images/isolation.png",
        par:"The people you live with also need to stay home for at least 14 days from when your symptoms started."
    },
    {
        text: "Maintain Distance",
        src: "../images/onemeter.png",
        par:"Avoid close contact with others in your household. Try to stay at least one metre away."
    },
    {
        text: "Make Peoples To Stay Far from You",
        src: "../images/distance.png",
        par:"If you live with someone more vulnerable try to arrange for them to stay elsewhere."
    },
    {
        text: "Get Groceries",
        src: "../images/outside.png",
        par:"Ask friends or neighbours to leave supplies outside your house."
    },
    {
        text: "Follow",
        src: "../images/mild.jpg",
        par:"Mild symptoms can be managed with resting, drinking liquids and paracetamol."
    },
    {
        text: "Visit Doctor",
        src: "../images/visit.png",
        par:"If your symptoms don't improve, or you have difficulty breathing or chest pain call your local health service."
    },
]

var h1 = document.createElement("h1")
var img = document.createElement("img")
var par = document.createElement("p")

h1.innerText=data[0].text
img.src = data[0].src
par.innerHTML=data[0].par


var div = document.getElementById("slide")
div.appendChild(h1);
div.appendChild(img);
div.appendChild(par);
pos = 1;

next.addEventListener("click",()=>{
    currentActive++;

    if(currentActive>numberOfCircles){
        currentActive = numberOfCircles
    }
    console.log(currentActive)
    updateCSS()

    h1.innerText=data[pos].text
    img.src = data[pos].src
    par.innerHTML=data[pos].par


    var div = document.getElementById("slide")
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(par);
    pos++;
})

prev.addEventListener("click",()=>{
    currentActive--;

    if(currentActive<1){
        currentActive = 1
    }
    console.log(currentActive)
    updateCSS()
    console.log(data[currentActive-1])
    h1.innerText=data[currentActive-1].text
    img.src = data[currentActive-1].src
    par.innerHTML=data[currentActive-1].par


    var div = document.getElementById("slide")
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(par);
    // pos--;

})
