let buttongreen = document.querySelector("#green");
let buttonyellow = document.querySelector("#yellow");


let x = 0;
let i = 0;

buttongreen.addEventListener("mousemove",function(){

    buttongreen.style.transform = 'rotate('+x+'deg)';  

        x += 10;
       
    
})

buttonyellow.addEventListener("click",function(){

    const arr = ["aqua","pink","purple"];
       buttonyellow.style.background = arr[i];  
        i++;
        if(i === arr.length){
            i=0;
        }
    })

const arr = ["indianred","aqua","pink"];