

let Cat = [document.querySelector("#silly"), document.querySelector("#Text"), 
document.querySelector("#audio") ]

lol = true





function Exploding(randm) { 
    
    let source = ""
    if (randm == 1){
        source = "Assests/natural-cat-skeleton1.webp"
    } 
    else if (randm == 2 ) {
        source = "Assests/TombStone.webp"
    }
    else {
        source = "Assests/dead_cat_2.png"
    }

    if (lol == true ) { 

        for (let i = 3; i > 0; i = i - 1) {
            alert("Self Destructing Feline in " + i)
          }


        lol = false

        Cat[1].textContent = "What Have you Done"
        
        Cat[2].play()

        Cat[0].src = source

        Cat[0].style.height = 250
        Cat[0].style.width = 250
    }
}
