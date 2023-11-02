window.addEventListener("DOMContentLoaded", function(){
    
    let p = document.querySelector("p");
    let link = document.createElement("a");
    let linkContent =document.createTextNode("ici");
    link.href = "https://google.com";
    
    link.appendChild(linkContent);
    p.appendChild(link);
    
});