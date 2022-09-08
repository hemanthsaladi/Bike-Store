const main=document.querySelector(".main-1");
const menu=document.querySelector("#menu");
const cross=document.querySelector(".fa");
const blurs=document.querySelector(".blur");
const side=document.querySelector(".hdn");

menu.addEventListener("click",()=>{    
    blurs.classList.add("active");
    side.classList.add("active");
})
cross.addEventListener("click",()=>{    
    blurs.classList.remove("active");
    side.classList.remove("active");
})