const btn = document.getElementById("SuffleBtn");
btn.addEventListener("click",(e)=>{
const divs = document.querySelectorAll('.name');
console.log(divs);
let disp = document.getElementById('display');

const randomIndex = Math.floor(Math.random() * divs.length);
setTimeout(function() {
    document.getElementById("display").value = divs[randomIndex].innerHTML;
divs[randomIndex].style.display = "none";
  }, 3000);
})
