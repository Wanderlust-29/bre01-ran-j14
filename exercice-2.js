window.addEventListener("DOMContentLoaded", function(){
    let newTitle = document.createElement("h2");
    let newTitleContent = document.createTextNode("Le titre de la deuxième section");
    let newP = document.createElement("p");
    let newPContent = document.createTextNode("Le paragraphe de la deuxième section");
    
    newTitle.appendChild(newTitleContent);
    newP.appendChild(newPContent);
    
    let section = document.querySelector("section:last-of-type");
    section.appendChild(newTitle);
    section.appendChild(newP)
    
    
});