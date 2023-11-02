window.addEventListener("DOMContentLoaded", function(){
    function play(){
        
        let button = document.querySelector(".case")
        addEventListener("click", ()=>{
            button.innerHTML="X"
        })
    }
    
    play();
})