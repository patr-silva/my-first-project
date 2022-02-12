let count = 1;

function render(){
    let container = document.getElementById('pokemon');

    container.innerHTML = `<img class = "poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count}.svg">`;
    
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function(){
    if(count > 1){
        count --;
        render();
    }
}

next.onclick = function(){
    if(count < 650){
        count ++;
        render();
    }
}


render();