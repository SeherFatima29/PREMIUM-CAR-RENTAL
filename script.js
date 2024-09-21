const menuBtn= document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnicon=menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnicon.setAttribute("class",isOpen ? "fa-caret-down" : "fa-bars")
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnicon.setAttribute("class", "fa-caret-down");
});


const scrollRevealOption={
    origin :"bottom",
    distance:"50px",
    duration:1000,
};
scrollReveal() .reveal(".header-container h1" ,{
...scrollRevealOption,
});
scrollReveal() .reveal(".header-container form" ,{
    ...scrollRevealOption,
    delay:500
    });
 scrollReveal() .reveal(".header-container img" ,{
        ...scrollRevealOption,
        delay:1000,
});
