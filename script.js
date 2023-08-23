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

navigate[0].addEventListener("click",()=>{
    menu.style.visibility="hidden";
})
navigate[1].addEventListener("click",()=>{
    menu.style.visibility="hidden";
})
navigate[2].addEventListener("click",()=>{
    menu.style.visibility="hidden";
})
navigate[3].addEventListener("click",()=>{
    menu.style.visibility="hidden";
})
navigate[4].addEventListener("click",()=>{
    menu.style.visibility="hidden";
})
