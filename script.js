const character = document.getElementById("character");

const blcok = document.getElementById("block");

function jump(){
    
    if(character.classlist != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

const checkDead = setInterval(function(){
    
    const charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && charTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u suck!")
    }
}, 10);