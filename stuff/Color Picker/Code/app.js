// set intitial count
let color1 = 0;
let color2 = 0;
let color3 = 0;

// selectvalues and buttons
const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const value3 = document.querySelector('#value3');
const btns = document.querySelectorAll(".btn");

document.body.style.backgroundColor = "rgb( "+ color1.toString() +", "+ color2.toString() +", "+ color3.toString() +")"

btns.forEach(function (cool) {
    cool.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        //red
            if(styles.contains('increasedRed')){
             color1 = color1 + 5;
             if(color1 >= 255){
                color1 = 255;
            }
            } else if(styles.contains('decreasedRed')){
                color1 = color1 - 5;
                if(color1 <= 0){
                    color1 = 0;
                }
            
            }

        //green
            if(styles.contains('increasedGreen')){
            color2 = color2 + 5;
            if(color2 >= 255){
               color2 = 255;
           }
           } else if(styles.contains('decreasedGreen')){
               color2 = color2 - 5;
               if(color2 <= 0){
                   color2 = 0;
               }
           
           }

        //blue
            if(styles.contains('increasedBlue')){
            color3 = color3 + 5;
            if(color3 >= 255){
               color3 = 255;
            }

           } else if(styles.contains('decreasedBlue')){
               color3 = color3 - 5;
               if(color3 <= 0){
                   color3 = 0;
               }
           
           }
//turn number into value 
        value1.textContent = color1;
        value2.textContent = color2;
        value3.textContent = color3;    

        const colortext = "rgb( "+ color1.toString() +", "+ color2.toString() +", "+ color3.toString() +")"
// turn background to color 
        document.body.style.backgroundColor = colortext;


//copy rgb line 
        if(styles.contains('happy')){
            navigator.clipboard.writeText(colortext);
        }

           
    });             
});