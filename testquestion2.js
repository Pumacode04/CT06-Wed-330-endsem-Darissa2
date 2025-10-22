let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
    createCanvas(200, 300);
    fill("pink");
    textAlign(CENTER, CENTER)
    textSize(20);
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 50;
    for (i=0; i<5; i++) {
        text(pokemons[i], 100, yPos);
        yPos = yPos + 50;
    }
}
