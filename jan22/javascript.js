const codes = document.querySelectorAll(".code")

codes[0].focus()

codes.forEach((code,idx)=>{
    code.addEventListener("keydown",(e)=>{
        const keyPressed = e.key

        if(keyPressed>=0 && keyPresses<=9){
            codes[idx].value = ''
            if(idx<codes.length-1){
                setTimeout(()=>codes[idx+1].focus(),10)
            }
            
        
            //codes[idx+1].focus()
        }else if(keyPresses === "Backspace"){
            if(idx>0){
                setTimeout(()=>codes[idx-1].focus(),10)
            }
            
        }
    })
})