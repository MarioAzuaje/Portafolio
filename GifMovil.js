let Developer = document.getElementsByName("imagen")[0];

function Gif(){
    Developer.setAttribute("src","./Images/Developer.gif");
}

function IMG(){
    Developer.setAttribute("src","./Images/Developerimg.jpeg");
}

setTimeout(IMG,5000);

Developer.addEventListener("mouseover", Gif);
Developer.addEventListener("mouseout", IMG);