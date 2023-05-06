let counter=0;
document.querySelector(".increment").addEventListener("click",()=>{counter++;document.querySelector("span").innerText=counter});
document.querySelector(".reset").addEventListener("click",()=>{counter=0;document.querySelector("span").innerText=counter})


