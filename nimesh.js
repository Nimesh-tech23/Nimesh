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

const projects = [
  {
    image: "image/p1.avif",
    title: "Project 1",
    description: "Description of Project 1A creative mobile UI/UX project focusing on accessibility and performance.",
  },
  {
    image: "image/p2.avif",
    title: "Project 2",
    description: "Description of Project 2A creative mobile UI/UX project focusing on accessibility and performance.",

  },
  {
    image: "image/p1.avif",
    title: "Project 3",
    description: "Description of Project 3A creative mobile UI/UX project focusing on accessibility and performance.",

  },
  {
    image: "image/p2.avif",
    title: "Project 4",
    description: "Description of Project 3A creative mobile UI/UX project focusing on accessibility and performance.",

  },
  {
    image: "image/p1.avif",
    title: "Project 5",
    description: "Description of Project 3A creative mobile UI/UX project focusing on accessibility and performance.",

  },
  {
    image: "image/p2.avif",
    title: "Project 6",
    description: "Description of Project 3A creative mobile UI/UX project focusing on accessibility and performance.",

  },
  
];
const Container = document.getElementById("project-container");
projects .forEach(project => { 
  const card = document.createElement("div");
  card.className="project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  Container.appendChild(card);
}
);
