
const btn = document.getElementById("button1");
//var level1 = document.getElementById("levels");
//const output = level1.options[level1.selectedIndex].text;

//var value1 = level1.value;
//console.log(level1); 

const div1 = document.getElementById("div1");

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quote_Display = document.getElementById('quoteDisplay');
const quote_Input = document.getElementById('quoteInput');
const timer1 = document.getElementById("timer");

function go(){
   location.href = "second.html";
}

quote_Input.addEventListener('input',() => {
   const arrayQuote = quote_Display.querySelectorAll('span')
   const arrayValue = quote_Input.value.split('')

   let incorrect=true
   arrayQuote.forEach((characterSpan,index)=>{
       const character = arrayValue[index]
       if(character == null){
           characterSpan.classList.remove('correct')
           characterSpan.classList.remove('incorrect')
           incorrect=false
       }
      else if(character === characterSpan.innerText){
           characterSpan.classList.add('correct')
           characterSpan.classList.remove('incorrect')
       }
       else{
          characterSpan.classList.remove('correct')
           characterSpan.classList.add('incorrect')
           correct=false
       }
   })
   if(incorrect) renderNewQuote()
})


function getRandomQuote(){
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote(){
   const quote = await getRandomQuote()
   quote_Display.innerHTML=''
  
   quote.split('').forEach(character => {
       const characterSpan=document.createElement('span')
      
       characterSpan.innerText=character
       quote_Display.appendChild(characterSpan)
       
   })
   quote_Input.value=null
   startTimer()
}
let startTime
function startTimer(){
    timer1.innerText=0
    startTime=new Date()
    setInterval(() =>{
        timer1.innerText = getTimerTime()
        if(timer1.innerText == 59){
                //alert("Time's Up!")
                //document.write("Time's Up!!")
                startTimer()
                stop()
         }
    },1000)
}

function stop(){
    alert('Your Times Up! Try Again.');
    location.href = "speedtyping.html"
}
function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}

renderNewQuote()

    


  