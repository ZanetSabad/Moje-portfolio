let animation = document.querySelectorAll (".animation_list")
console.log(animation)

if(window.matchMedia("(max-width: 1024px)").matches) {
    animation.style.color = "white"

}