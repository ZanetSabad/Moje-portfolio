let menuIcon = document.querySelector(".menuBurger")
let menu = document.querySelector(".menu")

menuIcon.addEventListener("click", function(){
    let iconSRC = menuIcon.src
    let splitSRC = iconSRC.split("/")
    let imageName = splitSRC[splitSRC.length-1]

    if(imageName == "burger.png"){
        menuIcon.src = "img/icons/krizek.png"
        menu.style.left = "0%"
        menu.style.width = "100%"
        menu.style.zIndex = 1
    } else  {
        menuIcon.src = "img/icons/burger.png"
        menu.style.left = "-100%"
     }
})
        
