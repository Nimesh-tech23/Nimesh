
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navlinks');

hamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('active');
});

const text="Hi, I am Mr.NJT";
const typetext=document.getElementById("typed-text");
let index=0;
const speed=150;
function type(){
  if(index<text.length){
    typetext.textContent+=text.charAt(index);
    index++;
    setTimeout(type,speed);
  }
}
type();
