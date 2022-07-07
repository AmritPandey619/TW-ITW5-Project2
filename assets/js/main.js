window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
})

const menu = document.querySelector('.nav_menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


var btn= document.getElementsByClassName("btun");
var slide=document.getElementById("slide");
btn[0].onclick=function() {
    slide.style.transform="translateX(0px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick=function() {
    slide.style.transform="translateX(-800px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[2].onclick=function() {
    slide.style.transform="translateX(-1600px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[3].onclick=function() {
    slide.style.transform="translateX(-2400px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

//banner
var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    effect: "cards",
    grabCursor: true,
  });