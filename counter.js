let lsValue=localStorage.getItem("counter")
let counter=0;
if(lsValue){
    counter=lsValue;
}
document.querySelector("span").innerText=counter;
document.querySelector(".increment").addEventListener("click",()=>{
    counter++;
    localStorage.setItem("counter",counter)
    document.querySelector("span").innerText=counter
});
document.querySelector(".reset").addEventListener("click",()=>{
    counter=0;
    localStorage.setItem("counter",counter)
    document.querySelector("span").innerText=counter
})


