let elModal=document.querySelector(".header__modal")
let elMenuBtn=document.querySelector(".header__hamburger--btn")
let elCloseBtn=document.querySelector(".close__bg--btn")



elMenuBtn.addEventListener("click",function(){
    elModal.classList.add("show")
    document.body.style="overflow:hidden"
})
elCloseBtn.addEventListener("click",function(){
    elModal.classList.remove("show")
    document.body.style="overflow:auto"
})