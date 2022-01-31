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

// function playDrum(key){
//   var audio = new Audio();
//   audio.src = data[key].sound;
//   audio.play();

//   data[key].el.style.animation = 'drum-animation 0.3s';
//   data[key].el.style.animation = 'drum-animation 0.3s';

//   data[key].el.addEventListener('webkitAnimationEnd',removeAnimation);
//   data[key].el.addEventListener('animationEnd',removeAnimation);
// };

// function removeAnimation(event){
//   event.currentTarget.style.webkitAnimation = 'none';
//   event.currentTarget.style.animation = 'none';
// }

// function handleKeyEvents(event){
//   playdrum(event.key.toUpperCase());
// }

// //construct();
// window.addEventListener('keydown',handleKeyEvents);