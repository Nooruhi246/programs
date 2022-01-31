const executeOrder = function(callback){
    console.log('Order placed')
    setTimeout(function(){
        console.log('Order Received')
        console.log('Chef Started Preparing!')
        setTimeout(function(){
            console.log('Pizza Sauce added!')
            setTimeout(function(){
                console.log('First layer of cheeze added!')
                setTimeout(function(){
                    console.log('Toppings added')
                    setTimeout(function(){
                        console.log('Final layer of cheeze added!')
                        setTimeout(function(){
                            console.log('pizza baked!')
                            setTimeout(function(){
                                console.log('Oregano aaadded and packed!')
                                callback()
                            })
                        },8000)  
                    },2000)
                },4000)
            },3000)
        },5000)
    },2000)
}

executeOrder(function(){
    console.log('The order is ready and handed over to the zomato guy!')
})

//this is a code


// var drunkit = document.getElementById("drumkit");

// function construct(){
//   for(var key in data){
//     var drumEl = document.createElement('div');
//     drumEl.classList.add('drum');

//     var h2 = document.createElement('h2');
//     h2.textContent = key;

//     var span = document.createElement('span');
//     span.textContenet = data[key].name

//     drumEl.appendChild(h2);
//     drumEl.appendChild(span);
//     drumkit.appenChild(drmEl);

//     data[key].el=drumEl;

//     drumEl.addEventListener('click',function(event){
//       var key = event.currentTarget.querySelector('h2').textContent;
//       playDrum(key);
//     })

//   };
// }