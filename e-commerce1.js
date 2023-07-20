const bar = document.getElementById("bar");
const closed = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", () =>{
        nav.classList.toggle("active");
    })
}

if(closed){
    closed.addEventListener("click", () =>{
        nav.classList.toggle("active");
    })
}
