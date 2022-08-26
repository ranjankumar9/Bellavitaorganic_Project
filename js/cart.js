let btn=document.getElementById("burgers")
let slider=document.getElementById("sliders")
let closeBtn=document.getElementById("close");



btn.addEventListener("click",function(){
    slider.style.display="block"
})
closeBtn.addEventListener("click",function(){
    slider.style.display="none";
})


