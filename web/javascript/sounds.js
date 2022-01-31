let btn = document.getElementsByClassName('sound');

for(let i=0; i<btn.length; i++)
{
    let selectedbtn= btn[i]
    playSound(selectedbtn)
}

function playSound(btn)
{
    btn.addEventListener('click', function ()
    {
        stopSound()
        document.getElementById(btn.innerText).play();
            
    })
}
    
function stopSound()
{
    for(let i=0; i< btn.length; i++)
    {
        let sound = document.getElementById(btn[i].innerText)
        sound.pause()
        sound.currentTime = 0
    }
}
    
let stop = document.getElementById("stop")
stop.addEventListener('click', function ()
{
    stopSound()
})

