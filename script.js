let menuIcon = document.querySelector (".slozka_close")
let menu = document.querySelector (".menu_respon")
console.log(menu);
let img = document.querySelector (".foto_mobil")
let nameone = document.querySelector (".name")
console.log(nameone);
let text = document.querySelector (".text")


menuIcon.addEventListener("click", function(){
    let iconSRC = menuIcon.src
    console.log(iconSRC);
    let splitSRC = iconSRC.split("/")
    console.log(splitSRC);
    let imageName = splitSRC[splitSRC.length-1]

    if(imageName == "slozka_close.png"){
        // menuIcon.src = "IMG/icons/slozka_open.png"
        menu.style.left = "0%"
        menu.style.backgroundColor = "#45A9BF"
        nameone.style.display = "none"
        text.style.display = "none"
       
    } else {
        menuIcon.src = "IMG/icons/slozka_close.png"
        menu.style.left = "-110%"
        menu.style.backgroundColor = "transparent"
    
    }
})

let menuIcon1 = document.querySelector (".slozka_open")
let menu1 = document.querySelector (".menu_respon")
let img1 = document.querySelector (".foto_mobil")
let name1 = document.querySelector (".name")
let text1 = document.querySelector (".text")

menuIcon1.addEventListener("click", function(){
    let iconSRC1 = menuIcon1.src
    let splitSRC1 = iconSRC1.split("/")
    let imageName1 = splitSRC1[splitSRC1.length-1]

    if(imageName1 == "slozka_open.png"){
        menu1.style.left = "-110%"
        menu1.style.backgroundColor = "transparent"
        name1.style.display = "inline"
        text1.style.display = "inline"
        
    } else {
        menuIcon1.src = "IMG/icons/slozka_open.png"
        menu1.style.left = "0%"
        menu1.style.backgroundColor = "#45A9BF"
        img1.style.display = "none"
        

        
    }
})





        // menu1.style.left = "-110%"
        // menu1.style.backgroundColor = "transparent"
        // name1.style.display = "inline"
        // text1.style.display = "inline"
        
    // } else {
    //     menuIcon1.src = "IMG/icons/slozka_open.png"
    //     menu1.style.left = "0%"
    //     menu1.style.backgroundColor = "#45A9BF"
    //     img1.style.display = "none"

        
