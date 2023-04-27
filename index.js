
let dexEntry;
let numberOfHintsLeft = 5;
let visibleHint = [false, false, false, false, false];
let pokemonName;
let typeArray = [];
let img1 = new Image();
let img2 = new Image();
let singleType;

// {
// document.querySelector("#kanto").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 151) + 1);
// });

// document.querySelector("#johto").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 100) + 152);
// });

// document.querySelector("#hoenn").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 135) + 252);
// });

// document.querySelector("#sinnoh").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 107) + 387);
// });

// document.querySelector("#unova").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 156) + 494);
// });

// document.querySelector("#kalos").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 72) + 650);
// });

// document.querySelector("#alola").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 88) + 722);
// });

// document.querySelector("#galar").addEventListener("click", (event) => {
//     event.preventDefault();
//     getPokemon(Math.floor(Math.random() * 96) + 810);
// });
// }



//Just picks a random pokemon on load
getPokemon(Math.floor(Math.random() * 890) + 1);

//New pokemon button
document.querySelector("#newPokemon").addEventListener("click", (event) => {
    getPokemon(Math.floor(Math.random() * 890) + 1);
});


//New hint function
document.querySelector("#hintButton").addEventListener("click", (event) => {
    console.log("new hint")
    if (numberOfHintsLeft > 0){
        loopFlag = true;
        while (loopFlag){
            let randomNumber = Math.floor(Math.random() * 5) + 1;
            switch(randomNumber){
                case 1:
                    if (visibleHint[0] === false){
                        document.querySelector("#height").style.display = "flex";
                        visibleHint[0] = true;
                        loopFlag = false;
                    }
                    break;
                case 2:
                    if (visibleHint[1] === false){
                        document.querySelector("#types").style.display = "flex";
                        visibleHint[1] = true;
                        loopFlag = false;
                    }
                    break;
                case 3:
                    if (visibleHint[2] === false){
                        document.querySelector("#region").style.display = "flex";
                        visibleHint[2] = true;
                        loopFlag = false;
                    }
                    break;
                case 4:
                    if (visibleHint[3] === false){
                        document.querySelector("#pokedexEntry2").style.display = "flex";
                        visibleHint[3] = true;
                        loopFlag = false;
                    }
                    break;   
                case 5:
                    if (visibleHint[4] === false){
                        document.querySelector("#weight").style.display = "flex";
                        visibleHint[4] = true;
                        loopFlag = false;
                    }
                    break;  
                default:
                    loopFlag = false;    
                    break;
            }
        }
        numberOfHintsLeft--;
        document.querySelector("#hintsLeft").innerHTML = `Hints Left: ${numberOfHintsLeft}`;
    }
    else{
        window.alert("0 hints left");
    }
});


//Name check function
inputId = document.getElementById('searchBar');
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) { 
        checkName(); 
        console.log("name check")
    }
});

function checkName(){
    const userInputName = document.querySelector("#searchBar").value;

    console.log(pokemonName);
    console.log(userInputName.toLowerCase());

    if (userInputName.toLowerCase() === pokemonName.toLowerCase()){
        document.querySelector("#name").style.display = "flex";
        document.querySelector("#image").style.display = "flex";
        document.querySelector("#pokedexEntry2").style.display = "flex";
        document.querySelector("#types").style.display = "flex";
        document.querySelector("#region").style.display = "flex";
        document.querySelector("#weight").style.display = "flex";
        document.querySelector("#height").style.display = "flex";
    }
}

//Give up function
document.querySelector('#giveUpButton').addEventListener('click', giveUp);
function giveUp() {
    console.log("giveUpButton clicked")
    document.querySelector("#name").style.display = "flex";
    document.querySelector("#image").style.display = "flex";
    document.querySelector("#pokedexEntry2").style.display = "flex";
    document.querySelector("#types").style.display = "flex";
    document.querySelector("#region").style.display = "flex";
    document.querySelector("#weight").style.display = "flex";
    document.querySelector("#height").style.display = "flex";

    //Sets hints to zero and updates the html
    numberOfHintsLeft = 0;
    document.querySelector("#hintsLeft").innerHTML = `Hints Left: ${numberOfHintsLeft}`;
}


function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRegion(randomNumber){
    switch(true) {
        case randomNumber >= 1 && randomNumber <= 151:
            return "Kanto";
        case randomNumber >= 152 && randomNumber <= 251:
            return "Johto";
        case randomNumber >= 252 && randomNumber <= 386:
            return "Hoenn";
        case randomNumber >= 387 && randomNumber <= 493:
            return "Sinnoh";
        case randomNumber >= 494 && randomNumber <= 649:
            return "Unova";
        case randomNumber >= 650 && randomNumber <= 721:
            return "Kalos";
        case randomNumber >= 722 && randomNumber <= 809:
            return "Alola";
        case randomNumber >= 810 && randomNumber <= 905:
            return "Galar";
    }
}



function getPokedexEntry1(idNumber){
    let dexEntry;
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${idNumber}`)
      .then((response) => response.json())
      .then((data) => {
        const englishEntries = data.flavor_text_entries.filter((entry) => entry.language.name === "en");
        dexEntry1 = englishEntries[0].flavor_text.toString();
        return dexEntry1;
      });
}
function getPokedexEntry2(idNumber){
    let dexEntry;
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${idNumber}`)
      .then((response) => response.json())
      .then((data) => {
        const englishEntries = data.flavor_text_entries.filter((entry) => entry.language.name === "en");
        dexEntry2 = englishEntries[1].flavor_text.toString();
        return dexEntry2;
      });
}

  
function getPokemon(idNumber){
    visibleHint = [false, false, false, false, false];
    console.log(idNumber)
    getPokedexEntry1(idNumber)
    getPokedexEntry2(idNumber)
    .then((dexEntry) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idNumber}`) 
        .then((response) => response.json())
        .then((data) => {
            pokemonName = data.name;

            document.querySelector("#name").innerHTML = `${capitalizeFirstLetter(data.name)}`;
            document.querySelector("#image").innerHTML = `<img class="sprite" id="sprite" src="${data.sprites.other["official-artwork"].front_default}" alt="Question Mark/Current Pokemon Image">`;
            document.querySelector("#pokedexEntry1").innerHTML = `
                <h3><u>Pokedex Entry 1:</u></h3>
                <p>${dexEntry2}</p>
            `;
            document.querySelector("#pokedexEntry2").innerHTML = `
                <h3><u>Pokedex Entry 2:</u></h3>
                <p>${dexEntry2}</p>
            `;

            //Setting types into a usable array of strings
            typeArray[0] = data.types[0].type.name;
            try { 
                typeArray[1] = data.types[1].type.name; 
                singleType = false;
            }
            catch (e) { 
                singleType = true;
            }

            if (singleType){
                typeArray[1] = null;
                setTypes(0, 1);
            }
            else{
                setTypes(0, 1);
                setTypes(1, 2);
            }

            // document.querySelector("#types").innerHTML = `
            //     <h3 class="typeHeader"><u>Types:</u></h3>
            //     <p>${data.types.map((type) => `<li>${type.type.name}</li>`).join("")}</p>
            // `;

            document.querySelector("#region").innerHTML = `
                <h3 class="regionHeader"><u>Region:</u></h3>
                <p>${getRegion(idNumber)}</p>
            `;
            document.querySelector("#weight").innerHTML = `
                <h3><u>Weight:</u></h3>
                <p>${(data.weight * 0.220462).toFixed(2)} lbs</p>
                `;
            document.querySelector("#height").innerHTML = `
                <h3><u>Height:</u></h3>
                <p>${((data.height / 10) * 3.048).toFixed(2)} ft</p>
            `;

            document.querySelector("#name").style.display = "none";
            document.querySelector("#image").style.display = "none";
            document.querySelector("#pokedexEntry2").style.display = "none";
            document.querySelector("#types").style.display = "none";
            document.querySelector("#region").style.display = "none";
            document.querySelector("#weight").style.display = "none";
            document.querySelector("#height").style.display = "none";

            numberOfHintsLeft = 5;

            document.querySelector("#hintsLeft").innerHTML = `Hints Left: ${numberOfHintsLeft}`;

            console.log("end of getPokemon")
        });
    });

    console.log("end of doc")
}

function setTypes(index, imgNumber){
    console.log(typeArray);

    const typeIconsFolder = "Type Icons/";
    const type = typeArray[index];
    const iconPath = `${typeIconsFolder}${type.charAt(0).toUpperCase() + type.slice(1)}_icon_SwSh.png`;
    
    if (imgNumber === 1){
        img1.src = iconPath;
        let src = document.querySelector("#typeIcons");
        src.appendChild(img1);
        if (singleType){
            if (src.contains(img2)){
                src.removeChild(img2);
            }
        }
    }
    else{
        img2.src = iconPath;
        let src = document.querySelector("#typeIcons");
        src.appendChild(img2);
    }
}



