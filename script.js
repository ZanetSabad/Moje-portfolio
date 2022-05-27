let menuIcon = document.querySelector (".slozka_close")
let menu = document.querySelector (".menu_respon")
let img = document.querySelector (".foto_mobil")
let nameone = document.querySelector (".name")
let text = document.querySelector (".text")


menuIcon.addEventListener("click", function(){
    let iconSRC = menuIcon.src
    let splitSRC = iconSRC.split("/")
    let imageName = splitSRC[splitSRC.length-1]

    if(imageName == "slozka_close.png"){
        menuIcon.src = "IMG/icons/slozka_open.png"
        menu.style.top = "65px"
        menu.style.backgroundColor = "#45A9BF"
        nameone.style.display = "none"
        text.style.display = "none"
        img.style.display = "none"
       
    } else {
        menuIcon.src = "IMG/icons/slozka_close.png"
        menu.style.top = "-550px"
        menu.style.backgroundColor = "transparent"
        nameone.style.display = "inline-block"
        text.style.display = "inline-block"
        img.style.display = "inline-block"
        // who.style.display = "none"
    
    }
})
// ****************************************************WHo
// let menuIconWho = document.querySelector (".slozka_close")
// let menuWho = document.querySelector (".menu_respon")
// let who = document.querySelector (".text_who_are strong")

// menuIconWho.addEventListener("click", function(){
//     let iconSRC = menuIconWho.src
//     let splitSRC = iconSRC.split("/")
//     let imageNameWho = splitSRC[splitSRC.length-1]

//     if(imageNameWho == "slozka_close.png"){
//         menuIconWho.src = "IMG/icons/slozka_open.png"
//         menuWho.style.top = "65px"
//         menuWho.style.backgroundColor = "#45A9BF"
//         who.style.display = "none"
//         // text.style.display = "none"
//         // img.style.display = "none"
       
//     } else {
//         menuIcon.src = "IMG/icons/slozka_close.png"
//         menu.style.top = "-550px"
//         menu.style.backgroundColor = "transparent"
//         // nameone.style.display = "inline-block"
//         // text.style.display = "inline-block"
//         // img.style.display = "inline-block"
    
//     }
// })

// let menuIcon1 = document.querySelector (".slozka_open")
// let menu1 = document.querySelector (".menu_respon")
// let img1 = document.querySelector (".foto_mobil")
// let name1 = document.querySelector (".name")
// let text1 = document.querySelector (".text")
// let who1 = document.querySelector (".text_who_are")

// menuIcon1.addEventListener("click", function(){
//     let iconSRC1 = menuIcon1.src
//     let splitSRC1 = iconSRC1.split("/")
//     let imageName1 = splitSRC1[splitSRC1.length-1]

//     if(imageName1 == "slozka_open.png"){
//         menu1.style.left = "-110%"
//         menu1.style.backgroundColor = "transparent"
//         name1.style.display = "inline-block"
//         text1.style.display = "inline-block"
//         who1.style.display = "none"
        
//     } else {
//         menuIcon1.src = "IMG/icons/slozka_open.png"
//         menu1.style.left = "0%"
//         menu1.style.backgroundColor = "#45A9BF"
//         img1.style.display = "none"
//         who1.style.display = "none"
        

        
//     }
// })





        // menu1.style.left = "-110%"
        // menu1.style.backgroundColor = "transparent"
        // name1.style.display = "inline"
        // text1.style.display = "inline"
        
    // } else {
    //     menuIcon1.src = "IMG/icons/slozka_open.png"
    //     menu1.style.left = "0%"
    //     menu1.style.backgroundColor = "#45A9BF"
    //     img1.style.display = "none"

        
