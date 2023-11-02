window.addEventListener("DOMContentLoaded", function(){
    let ul = document.createElement("ul")
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    document.body.appendChild(ul);
    
    
    
    for (let i = 0; i < pokemons.length; i++){
        let pokemon = document.createTextNode(pokemons[i])
        let li = document.createElement("li");
        ul.appendChild(li)
        li.appendChild(pokemon);
    }
});