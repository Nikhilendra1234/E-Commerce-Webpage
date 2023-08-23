const close=document.querySelector(".close"); 
const open=document.querySelector(".ham"); 
const menu=document.querySelector(".menu");
const navigate=document.querySelectorAll(".navigate");

close.addEventListener("click",()=>{ 
menu.style.visibility="hidden";
 })

open.addEventListener("click",()=>{ 
menu.style.visibility="visible";
 })

navigate.addEventListener("click",()=>{
    menu.style.visibility="hidden";
})