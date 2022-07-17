let keypad_display =document.getElementById('keypad_display img');
let keypad_keys= Array.from(document.getElementsByClassName('button'));
console.log(keypad_keys);
// let keypad_display=document.getElementById('img');
keypad_display.map(img=>{
    img.addEventListener('clicked',(e)=>{
        switch(e.target.innerText){
            case'img':
        if(keypad_display.innerText){
            keypad_display.innerText=keypad_display.slice(0,-1);
        }
        break;


        default:
            keypad_display.innerText +=e.target.innerText;
    }
    })
 
})

keypad_keys.map(button =>{
    button.addEventListener('click',(e) =>{
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){

            default:
                keypad_display.innerText += e.target.innerText;
        
        }
    })
})