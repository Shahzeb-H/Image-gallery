var current = document.querySelector(".main-img img");
var images = document.querySelectorAll(".imgs img");
images[0].style.opacity = 0.5;
images.forEach(myfunction);
function myfunction(a){
  a.addEventListener("click",myfunction2);
}
function myfunction2(){
  images.forEach((a)=>{
    a.style.opacity = 1;
  });
  current.classList.add("fade-in");
  setTimeout(function(){
    current.classList.remove("fade-in");
  },500);
  this.style.opacity = 0.5;
  current.setAttribute("src", this.src);
};
