// var country=document.getElementById('country').value;
// var startdate=document.getElementById('startdate').value;
// var enddate=document.getElementById('enddate').value;

function save(){
    var country=document.getElementById('country').value;
    var startdate=document.getElementById('startdate').value;
    var enddate=document.getElementById('enddate').value;

    fetch(`https://api.covid19api.com/country/${country}?from=${startdate}T00:00:00Z&to=${enddate}T00:00:00Z`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        // if(response.status===200 && response.statusText==='ok'){
        //     console.log("ok")
        // }

        var x=document.getElementById("data");
        for(var i=0;i<data.length;i++)
        {
            var temp=document.createElement("div");
            temp.style.width="25%";
            temp.setAttribute('id','add');
            var z=document.createElement("p");
            z.innerHTML=`Date ⇨ ${data[i].Date}`; 
            z.style.padding="6px";
            var b=document.createElement("p");
            b.innerHTML=`Confirmed Cases: ${data[i].Confirmed}`; 
            b.style.padding="6px";
            var b1=document.createElement("p");
            b1.innerHTML=`Active Cases: ${data[i].Active}`; 
            b1.style.padding="6px";
            var b2=document.createElement("p");
            b2.innerHTML=`Deaths: ${data[i].Deaths}`;  
            b2.style.padding="6px";
            temp.appendChild(z);
            temp.appendChild(b);
            temp.appendChild(b1);
            temp.appendChild(b2); 
            x.appendChild(temp);

        }
    
    } )
}


// const sliderContainer = document.querySelector(".slider-container")

// const slideRight = document.querySelector(".right-slide")
// const slideLeft = document.querySelector(".left-slide")

// const upButton = document.querySelector(".up-button")
// const downButton = document.querySelector(".down-button")

// const slidesLength = slideRight.querySelectorAll("div").length

// let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLength-1)*100}vh`

// upButton.addEventListener("click",()=>changeSlide("up"))
// downButton.addEventListener("click",()=>changeSlide("down"))


// const changeSlide=(direction) =>{
//     const sliderHeight = sliderContainer.clientHeight
//     if(direction==="up"){
//         activeSlideIndex++
//         if(activeSlideIndex> slidesLength-1){
//             activeSlideIndex=0
//         }
//     }else if(direction==="down"){
//         activeSlideIndex--;
//         if(activeSlideIndex<0){
//             activeSlideIndex = slidesLength-1
//         }
//     }
//     slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
//     slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`
// }
