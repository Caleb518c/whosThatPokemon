let dexEntry, dexEntry1, dexEntry2;
let pokemonName, singleType, globalIdNum, currentStreakVar;
let numberOfHintsLeft = 5;
let numberOfGuessesLeft = 3;
let visibleHint = [false, false, false, false, false];
let typeArray = [];
let img1 = new Image();
let img2 = new Image();

const pokemonA = ["Abomasnow", "Abra", "Absol", "Accelgor", "Aegislash", "Aerodactyl", "Aggron", "Aipom", "Alakazam", "Alcremie", "Alomomola", "Altaria", "Amaura", "Ambipom", "Amoonguss", "Ampharos", "Anorith", "Appletun", "Applin", "Araquanid", "Arbok", "Arcanine", "Arceus", "Archen", "Archeops", "Arctovish", "Arctozolt", "Ariados", "Armaldo", "Aromatisse", "Aron", "Arrokuda", "Articuno", "Audino", "Aurorus", "Avalugg", "Axew", "Azelf", "Azumarill", "Azurill"];
const pokemonB = ["Bagon", "Baltoy", "Banette", "Barbaracle", "Barboach", "Barraskewda", "Basculin", "Bastiodon", "Bayleef", "Beartic", "Beautifly", "Beedrill", "Beheeyem", "Beldum", "Bellossom", "Bellsprout", "Bergmite", "Bewear", "Bibarel", "Bidoof", "Binacle", "Bisharp", "Blacephalon", "Blastoise", "Blaziken", "Blipbug", "Blissey", "Blitzle", "Boldore", "Boltund", "Bonsly", "Bouffalant", "Bounsweet", "Braixen", "Braviary", "Breloom", "Brionne", "Bronzong", "Bronzor", "Bruxish", "Budew", "Buizel", "Bulbasaur", "Buneary", "Bunnelby", "Burmy", "Butterfree", "Buzzwole"];
const pokemonC = ["Cacnea", "Cacturne", "Calyrex", "Camerupt", "Carbink", "Carkol", "Carnivine", "Carracosta", "Carvanha", "Cascoon", "Castform", "Caterpie", "Celebi", "Celesteela", "Centiskorch", "Chandelure", "Chansey", "Charizard", "Charjabug", "Charmander", "Charmeleon", "Chatot", "Cherrim", "Cherubi", "Chesnaught", "Chespin", "Chewtle", "Chikorita", "Chimchar", "Chimecho", "Chinchou", "Chingling", "Cinccino", "Cinderace", "Clamperl", "Clauncher", "Clawitzer", "Claydol", "Clefable", "Clefairy", "Cleffa", "Clobbopus", "Cloyster", "Coalossal", "Cobalion", "Cofagrigus", "Combee", "Combusken", "Comfey", "Conkeldurr", "Copperajah", "Corphish", "Corsola", "Corviknight", "Corvisquire", "Cosmoem", "Cosmog", "Cottonee", "Crabominable", "Crabrawler", "Cradily", "Cramorant", "Cranidos", "Crawdaunt", "Cresselia", "Croagunk", "Crobat", "Croconaw", "Crustle", "Cryogonal", "Cubchoo", "Cubone", "Cufant", "Cursola", "Cutiefly", "Cyndaquil"];
const pokemonD = ["Darkrai", "Darmanitan", "Dartrix", "Darumaka", "Decidueye", "Dedenne", "Deerling", "Deino", "Delcatty", "Delibird", "Delphox", "Deoxys", "Dewgong", "Dewott", "Dewpider", "Dhelmise", "Dialga", "Diancie", "Diggersby", "Diglett", "Ditto", "Dodrio", "Doduo", "Donphan", "Dottler", "Doublade", "Dracovish", "Dracozolt", "Dragalge", "Dragapult", "Dragonair", "Dragonite", "Drakloak", "Drampa", "Drapion", "Dratini", "Drednaw", "Dreepy", "Drifblim", "Drifloon", "Drilbur", "Drizzile", "Drowzee", "Druddigon", "Dubwool", "Ducklett", "Dugtrio", "Dunsparce", "Duosion", "Duraludon", "Durant", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Dwebble"];
const pokemonE = ["Eelektrik", "Eelektross", "Eevee", "Eiscue", "Ekans", "Eldegoss", "Electabuzz", "Electivire", "Electrike", "Electrode", "Elekid", "Elgyem", "Emboar", "Emolga", "Empoleon", "Entei", "Escavalier", "Espeon", "Espurr", "Eternatus", "Excadrill", "Exeggcute", "Exeggutor", "Exploud"];
const pokemonF = [  "Falinks",  "Farfetch'd",  "Fearow",  "Feebas",  "Fennekin",  "Feraligatr",  "Ferroseed",  "Ferrothorn",  "Finneon",  "Flaaffy",  "Flabébé",  "Flapple",  "Flareon",  "Fletchinder",  "Fletchling",  "Floatzel",  "Floette",  "Florges",  "Flygon",  "Fomantis",  "Foongus",  "Forretress",  "Fraxure",  "Frillish",  "Froakie",  "Frogadier",  "Froslass",  "Frosmoth",  "Furfrou",  "Furret"]
const pokemonG = [  "Gabite",  "Gallade",  "Galvantula",  "Garbodor",  "Garchomp",  "Gardevoir",  "Gastly",  "Gastrodon",  "Genesect",  "Gengar",  "Geodude",  "Gible",  "Gigalith",  "Girafarig",  "Giratina",  "Glaceon",  "Glalie",  "Glameow",  "Glastrier",  "Gligar",  "Gliscor",  "Gloom",  "Gogoat",  "Golbat",  "Goldeen",  "Golduck",  "Golem",  "Golett",  "Golisopod",  "Golurk",  "Goodra",  "Goomy",  "Gorebyss",  "Gossifleur",  "Gothita",  "Gothitelle",  "Gothorita",  "Gourgeist",  "Granbull",  "Grapploct",  "Graveler",  "Greedent",  "Greninja",  "Grimer",  "Grimmsnarl",  "Grookey",  "Grotle",  "Groudon",  "Grovyle",  "Growlithe",  "Grubbin",  "Grumpig",  "Gulpin",  "Gumshoos",  "Gurdurr",  "Guzzlord",  "Gyarados"]
const pokemonH = [  'Hakamo-o',  'Happiny',  'Hariyama',  'Hatenna',  'Hatterene',  'Hattrem',  'Haunter',  'Hawlucha',  'Haxorus',  'Heatmor',  'Heatran',  'Heliolisk',  'Helioptile',  'Heracross',  'Herdier',  'Hippopotas',  'Hippowdon',  'Hitmonchan',  'Hitmonlee',  'Hitmontop',  'Honchkrow',  'Honedge',  'Ho-Oh',  'Hoopa',  'Hoothoot',  'Hoppip',  'Horsea',  'Houndoom',  'Houndour',  'Huntail',  'Hydreigon',  'Hypno']
const pokemonI = [    "Igglybuff",    "Illumise",    "Impidimp",    "Incineroar",    "Indeedee",    "Infernape",    "Inkay",    "Inteleon",    "Ivysaur"]
const pokemonJ = ["Jangmo-o", "Jellicent", "Jigglypuff", "Jirachi", "Jolteon", "Joltik", "Jumpluff", "Jynx"];
const pokemonK = [    "Kabuto",    "Kabutops",    "Kadabra",    "Kakuna",    "Kangaskhan",    "Karrablast",    "Kartana",    "Kecleon",    "Keldeo",    "Kingdra",    "Kingler",    "Kirlia",    "Klang",    "Klefki",    "Klink",    "Klinklang",    "Koffing",    "Komala",    "Kommo-o",    "Krabby",    "Kricketot",    "Kricketune",    "Krokorok",    "Krookodile",    "Kubfu",    "Kyogre",    "Kyurem"]
const pokemonL = [  "Lairon",  "Lampent",  "Landorus",  "Lanturn",  "Lapras",  "Larvesta",  "Larvitar",  "Latias",  "Latios",  "Leafeon",  "Leavanny",  "Ledian",  "Ledyba",  "Lickilicky",  "Lickitung",  "Liepard",  "Lileep",  "Lilligant",  "Lillipup",  "Linoone",  "Litleo",  "Litten",  "Litwick",  "Lombre",  "Lopunny",  "Lotad",  "Loudred",  "Lucario",  "Ludicolo",  "Lugia",  "Lumineon",  "Lunala",  "Lunatone",  "Lurantis",  "Luvdisc",  "Luxio",  "Luxray",  "Lycanroc"]
const pokemonM = [  "Machamp",  "Machoke",  "Machop",  "Magby",  "Magcargo",  "Magearna",  "Magikarp",  "Magmar",  "Magmortar",  "Magnemite",  "Magneton",  "Magnezone",  "Makuhita",  "Malamar",  "Mamoswine",  "Manaphy",  "Mandibuzz",  "Manectric",  "Mankey",  "Mantine",  "Mantyke",  "Maractus",  "Mareanie",  "Mareep",  "Marill",  "Marowak",  "Marshadow",  "Marshtomp",  "Masquerain",  "Mawile",  "Medicham",  "Meditite",  "Meganium",  "Melmetal",  "Meloetta",  "Meltan",  "Meowstic",  "Meowth",  "Mesprit",  "Metagross",  "Metang",  "Metapod",  "Mew",  "Mewtwo",  "Mienfoo",  "Mienshao",  "Mightyena",  "Milcery",  "Milotic",  "Miltank",  "Mime Jr.",  "Mimikyu",  "Minccino",  "Minior",  "Minun",  "Misdreavus",  "Mismagius",  "Moltres",  "Monferno",  "Morelull",  "Morgrem",  "Morpeko",  "Mothim",  "Mr. Mime",  "Mr. Rime",  "Mudbray",  "Mudkip",  "Mudsdale",  "Muk",  "Munchlax",  "Munna",  "Murkrow",  "Musharna"]
const pokemonN = [    "Naganadel",    "Natu",    "Necrozma",    "Nickit",    "Nidoking",    "Nidoqueen",    "Nidoran♀",    "Nidoran♂",    "Nidorina",    "Nidorino",    "Nihilego",    "Nincada",    "Ninetales",    "Ninjask",    "Noctowl",    "Noibat",    "Noivern",    "Nosepass",    "Numel",    "Nuzleaf"]
const pokemonO = [  "Obstagoon",  "Octillery",  "Oddish",  "Omanyte",  "Omastar",  "Onix",  "Oranguru",  "Orbeetle",  "Oricorio",  "Oshawott"]
const pokemonP = [    'Pachirisu',    'Palkia',    'Palossand',    'Palpitoad',    'Pancham',    'Pangoro',    'Panpour',    'Pansage',    'Pansear',    'Paras',    'Parasect',    'Passimian',    'Patrat',    'Pawniard',    'Pelipper',    'Perrserker',    'Persian',    'Petilil',    'Phanpy',    'Phantump',    'Pheromosa',    'Phione',    'Pichu',    'Pidgeot',    'Pidgeotto',    'Pidgey',    'Pidove',    'Pignite',    'Pikachu',    'Pikipek',    'Piloswine',    'Pincurchin',    'Pineco',    'Pinsir',    'Piplup',    'Plusle',    'Poipole',    'Politoed',    'Poliwag',    'Poliwhirl',    'Poliwrath',    'Polteageist',    'Ponyta',    'Poochyena',    'Popplio',    'Porygon',    'Porygon2',    'Porygon-Z',    'Primarina',    'Primeape',    'Prinplup',    'Probopass',    'Psyduck',    'Pumpkaboo',    'Pupitar',    'Purrloin',    'Purugly',    'Pyroar',    'Pyukumuku']
const pokemonQ = [    "Quagsire",    "Quilava",    "Quilladin",    "Qwilfish"]
const pokemonR = [  "Raboot",  "Raichu",  "Raikou",  "Ralts",  "Rampardos",  "Rapidash",  "Raticate",  "Rattata",  "Rayquaza",  "Regice",  "Regidrago",  "Regieleki",  "Regigigas",  "Regirock",  "Registeel",  "Relicanth",  "Remoraid",  "Reshiram",  "Reuniclus",  "Rhydon",  "Rhyhorn",  "Rhyperior",  "Ribombee",  "Rillaboom",  "Riolu",  "Rockruff",  "Roggenrola",  "Rolycoly",  "Rookidee",  "Roselia",  "Roserade",  "Rotom",  "Rowlet",  "Rufflet",  "Runerigus"]
const pokemonS = [    'Sableye',    'Salamence',    'Salandit',    'Salazzle',    'Samurott',    'Sandaconda',    'Sandile',    'Sandshrew',    'Sandslash',    'Sandygast',    'Sawk',    'Sawsbuck',    'Scatterbug',    'Sceptile',    'Scizor',    'Scolipede',    'Scorbunny',    'Scrafty',    'Scraggy',    'Scyther',    'Seadra',    'Seaking',    'Sealeo',    'Seedot',    'Seel',    'Seismitoad',    'Sentret',    'Serperior',    'Servine',    'Seviper',    'Sewaddle',    'Sharpedo',    'Shaymin',    'Shedinja',    'Shelgon',    'Shellder',    'Shellos',    'Shelmet',    'Shieldon',    'Shiftry',    'Shiinotic',    'Shinx',    'Shroomish',    'Shuckle',    'Shuppet',    'Sigilyph',    'Silcoon',    'Silicobra',    'Silvally',    'Simipour',    'Simisage',    'Simisear',    'Sinistea',    'Sirfetch\'d',    'Sizzlipede',    'Skarmory',    'Skiddo',    'Skiploom',    'Skitty',    'Skorupi',    'Skrelp',    'Skuntank',    'Skwovet',    'Slaking',    'Slakoth',    'Sliggoo',    'Slowbro',    'Slowking',    'Slowpoke',    'Slugma',    'Slurpuff',    'Smeargle',    'Smoochum',    'Sneasel',    'Snivy',    'Snom',    'Snorlax',    'Snorunt',    'Snover',    'Snubbull',    'Sobble',    'Solgaleo',    'Solosis',    'Solrock',    'Spearow',    'Spectrier',    'Spewpa',    'Spheal',    'Spinarak',    'Spinda',    'Spiritomb',    'Spoink',    'Spritzee',    'Squirtle',    'Stakataka',    'Stantler',    'Staraptor',    'Staravia',    'Starly',    'Starmie',    'Staryu',    'Steelix',    'Steenee',    'Stonjourner',    'Stoutland',    'Stufful',    'Stunfisk',    'Stunky',    'Sudowoodo',    'Suicune',    'Sunflora',    'Sunkern',    'Surskit',    'Swablu',    'Swadloon',    'Swalot',    'Swampert',    'Swanna',    'Swellow',    'Swinub',    'Swirlix',    'Swoobat',    'Sylveon']
const pokemonT = [    "Taillow",    "Talonflame",    "Tangela",    "Tangrowth",    "Tapu Bulu",    "Tapu Fini",    "Tapu Koko",    "Tapu Lele",    "Tauros",    "Teddiursa",    "Tentacool",    "Tentacruel",    "Tepig",    "Terrakion",    "Thievul",    "Throh",    "Thundurus",    "Thwackey",    "Timburr",    "Tirtouga",    "Togedemaru",    "Togekiss",    "Togepi",    "Togetic",    "Torchic",    "Torkoal",    "Tornadus",    "Torracat",    "Torterra",    "Totodile",    "Toucannon",    "Toxapex",    "Toxel",    "Toxicroak",    "Toxtricity",    "Tranquill",    "Trapinch",    "Treecko",    "Trevenant",    "Tropius",    "Trubbish",    "Trumbeak",    "Tsareena",    "Turtonator",    "Turtwig",    "Tympole",    "Tynamo",    "Type: Null",    "Typhlosion",    "Tyranitar",    "Tyrantrum",    "Tyrogue",    "Tyrunt"]
const pokemonU = ["Umbreon", "Unfezant", "Unown", "Ursaring", "Urshifu", "Uxie"]
const pokemonV = [    "Vanillish",    "Vanillite",    "Vanilluxe",    "Vaporeon",    "Venipede",    "Venomoth",    "Venonat",    "Venusaur",    "Vespiquen",    "Vibrava",    "Victini",    "Victreebel",    "Vigoroth",    "Vikavolt",    "Vileplume",    "Virizion",    "Vivillon",    "Volbeat",    "Volcanion",    "Volcarona",    "Voltorb",    "Vullaby",    "Vulpix"]
const pokemonW = [    "Wailmer",    "Wailord",    "Walrein",    "Wartortle",    "Watchog",    "Weavile",    "Weedle",    "Weepinbell",    "Weezing",    "Whimsicott",    "Whirlipede",    "Whiscash",    "Whismur",    "Wigglytuff",    "Wimpod",    "Wingull",    "Wishiwashi",    "Wobbuffet",    "Woobat",    "Wooloo",    "Wooper",    "Wormadam",    "Wurmple",    "Wynaut"]
const pokemonX = [  "Xatu",  "Xerneas",  "Xurkitree"]
const pokemonY = ["Yamask", "Yamper", "Yanma", "Yanmega", "Yungoos", "Yveltal"]
const pokemonZ = [  "Zacian",  "Zamazenta",  "Zangoose",  "Zapdos",  "Zarude",  "Zebstrika",  "Zekrom",  "Zeraora",  "Zigzagoon",  "Zoroark",  "Zorua",  "Zubat",  "Zweilous",  "Zygarde"]

const allPokemonNames = [...pokemonA, ...pokemonB, ...pokemonC, ...pokemonD, ...pokemonE, ...pokemonF, ...pokemonG, ...pokemonH, ...pokemonI, ...pokemonJ, ...pokemonK, ...pokemonL, ...pokemonM, ...pokemonN, ...pokemonO, ...pokemonP, ...pokemonQ, ...pokemonR, ...pokemonS, ...pokemonT, ...pokemonU, ...pokemonV, pokemonW, ...pokemonX, ...pokemonY, ...pokemonZ]




const searchBar = document.getElementById('searchBar');
const originalPlaceholder = searchBar.getAttribute('placeholder');

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
      searchBar.value = event.target.textContent;
    }
  });

searchBar.addEventListener('focus', function() {
  searchBar.removeAttribute('placeholder');
});
searchBar.addEventListener('blur', function() {
  searchBar.setAttribute('placeholder', originalPlaceholder);
});

document.querySelector("#autoCompleteList").style.height = "0";
document.querySelector("#autoCompleteList").style.display = "none";

const searchInput = document.querySelector("#searchBar");
document.addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
        searchBar.value = e.target.textContent;
        document.querySelector("#autoCompleteList").style.display = "none";
          
    } 
    else if (e.target !== searchInput) {
        document.querySelector("#autoCompleteList").style.display = "none";
    } 
})


//Function that autocomplete names in the search bar
searchInput.addEventListener('keyup', () => {

    let results = [];
    let input = searchInput.value;

    const pokemonByLetter = { a: pokemonA, b: pokemonB, c: pokemonC, d: pokemonD, e: pokemonE, f: pokemonF, g: pokemonG, h: pokemonH, i: pokemonI, j: pokemonJ, k: pokemonK, l: pokemonL, m: pokemonM, n: pokemonN, o: pokemonO, p: pokemonP, q: pokemonQ, r: pokemonR, s: pokemonS, t: pokemonT, u: pokemonU, v: pokemonV, w: pokemonW, x: pokemonX, y: pokemonY, z: pokemonZ };      
      
      const firstLetter = searchInput.value.charAt(0).toLowerCase();
      const pokemonList = pokemonByLetter[firstLetter] || [];
      
      results = [];
      input = searchInput.value;
      if (input.length > 0) {
        results = pokemonList.filter((item) => {
          return item.toLowerCase().includes(input.toLowerCase());
        });
      }
      renderResults(results);
});

//Helper function for autocomplete
function renderResults(results) {
    const autoCompleteList = document.querySelector("#autoCompleteList");

    if (!results.length){
        autoCompleteList.style.height = "0";
        autoCompleteList.style.display = "none";
    } else {
        autoCompleteList.style.height = "100%";
        autoCompleteList.style.display = "flex";
    }

    let content = results.map((item) => {
        return `<li>${item}</li>`;
    }).join('');

    //Add the string "content" to the autocomplete container
    document.querySelector("#autoCompleteList").innerHTML = content;
}



//Generation buttons
const buttons = document.querySelectorAll(".regionButton");
const buttonStates = new Array(buttons.length).fill(false);

buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    button.style.color = (button.style.color === "white") ? "grey" : "white";
    buttonStates[index] = !buttonStates[index];
  });
});




//New pokemon button
document.querySelector("#newPokemon").addEventListener("click", (event) => {
    let noneSelected = false;
    let numberOfGenerations = 0;
    let randomNumber;
  
    while (noneSelected === false) {
      const enabledRanges = [];
  
      buttonStates.forEach((state, index) => {
        if (state) {
          switch (index) {
            case 0:
              enabledRanges.push({ rangeStart: 1, rangeEnd: 151 });
              break;
            case 1:
              enabledRanges.push({ rangeStart: 152, rangeEnd: 251 });
              break;
            case 2:
              enabledRanges.push({ rangeStart: 252, rangeEnd: 386 });
              break;
            case 3:
              enabledRanges.push({ rangeStart: 387, rangeEnd: 493 });
              break;
            case 4:
              enabledRanges.push({ rangeStart: 494, rangeEnd: 649 });
              break;
            case 5:
              enabledRanges.push({ rangeStart: 650, rangeEnd: 721 });
              break;
            case 6:
              enabledRanges.push({ rangeStart: 722, rangeEnd: 809 });
              break;
            case 7:
              enabledRanges.push({ rangeStart: 810, rangeEnd: 905 });
              break;
            default:
              break;
          }
          numberOfGenerations++;
        }
      });
  
      if (enabledRanges.length === 0) {
        window.alert("No generations are selected. Please select at least one generation.");
        noneSelected = true;
      } else {
        const selectedRange = enabledRanges[Math.floor(Math.random() * enabledRanges.length)];
        randomNumber = Math.floor(Math.random() * (selectedRange.rangeEnd - selectedRange.rangeStart + 1)) + selectedRange.rangeStart;
        getPokemon(randomNumber);

        if (numberOfGenerations === 1){
            stripeColor(getRegion(randomNumber));
        } else {
            document.getElementById("stripe1").style.backgroundColor = "red";
            document.getElementById("stripe2").style.backgroundColor = "blue";
            document.getElementById("stripe3").style.backgroundColor = "green";
        }
        return;
      }
    }
});

//Changes the color of the background stripes to match the generation
function stripeColor(generation){
    switch(generation){
        case "Kanto":
            document.getElementById("stripe1").style.backgroundColor = "rgb(225, 12, 16)";
            document.getElementById("stripe2").style.backgroundColor = "rgb(55, 101, 255)";
            document.getElementById("stripe3").style.backgroundColor = "rgb(39, 178, 1)";
            break;
        case "Johto":
            document.getElementById("stripe1").style.backgroundColor = "rgb(193, 175, 70)";
            document.getElementById("stripe2").style.backgroundColor = "silver";
            document.getElementById("stripe3").style.backgroundColor = "rgb(19, 177, 163)";
            break; 
        case "Hoenn":
            document.getElementById("stripe1").style.backgroundColor = "rgb(140, 0, 0)";
            document.getElementById("stripe2").style.backgroundColor = "rgb(0, 115, 177)";
            document.getElementById("stripe3").style.backgroundColor = "rgb(0, 166, 78)";
            break;  
        case "Sinnoh":
            document.getElementById("stripe1").style.backgroundColor = "rgb(76, 160, 177)";
            document.getElementById("stripe2").style.backgroundColor = "rgb(220, 145, 170)";
            document.getElementById("stripe3").style.backgroundColor = "rgb(223, 202, 233)";
            break; 
        case "Unova":
            document.getElementById("stripe1").style.backgroundColor = "black";
            document.getElementById("stripe2").style.backgroundColor = "grey";
            document.getElementById("stripe3").style.backgroundColor = "white";
            break; 
        case "Kalos":
            //Fix these they look like shit
            document.getElementById("stripe1").style.backgroundColor = "rgb(61, 184, 179)";
            document.getElementById("stripe2").style.backgroundColor = "rgb(220, 48, 34)";
            document.getElementById("stripe3").style.backgroundColor = "rgb(124, 202, 100)";
            break; 
        case "Alola":    
            //Fix these they look like shit
            document.getElementById("stripe1").style.backgroundColor = "rgb(247, 153, 27)";
            document.getElementById("stripe2").style.backgroundColor = "rgb(25, 150, 212)";
            document.getElementById("stripe3").style.backgroundColor = "black";
            break; 
        case "Galar":    
            document.getElementById("stripe1").style.backgroundColor = "rgb(151, 36, 29)";
            document.getElementById("stripe2").style.backgroundColor = "rgb(78, 29, 111)";
            document.getElementById("stripe3").style.backgroundColor = "black"; //I really don't know what color this should be
            break;                  
    }
}

//New hint function
document.querySelector("#hintButton").addEventListener("click", (event) => {
    if (numberOfHintsLeft > 0){
        loopFlag = true;
        while (loopFlag){
            let randomNumber = Math.floor(Math.random() * 5) + 1;
            switch(randomNumber){
                case 1:
                    if (visibleHint[0] === false){
                        document.querySelector("#height").style.display = "flex";
                        document.getElementById("heightAndWeightContainer").style.minWidth = "35%";
                        document.getElementById("heightAndWeightContainer").style.padding = "2%";
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
                        document.getElementById("heightAndWeightContainer").style.minWidth = "35%";
                        document.getElementById("heightAndWeightContainer").style.padding = "2%";
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
    }
});

function checkName(){
    const userInputName = document.querySelector("#searchBar").value;

    console.log(pokemonName);

    if (userInputName.toLowerCase() === pokemonName.toLowerCase()){
        document.querySelector("#name").style.display = "flex";
        document.querySelector("#image").style.display = "flex";
        document.querySelector("#pokedexEntry2").style.display = "flex";
        document.querySelector("#types").style.display = "flex";
        document.querySelector("#region").style.display = "flex";
        document.querySelector("#weight").style.display = "flex";
        document.querySelector("#height").style.display = "flex";
        document.getElementById("heightAndWeightContainer").style.minWidth = "35%";
        document.getElementById("heightAndWeightContainer").style.padding = "2%";
        document.getElementById("newPokemon").style.display = "flex";
        document.getElementById("generationSelectorContainer").style.display = "flex";
        

        document.getElementById("results").style.display = "none";
        document.getElementById("hintButton").style.display = "none";
        document.getElementById("leftText").style.display = "none";
        document.getElementById("giveUpButton").style.display = "none";

        currentStreak("increase");
        stripeColor(getRegion(globalIdNum));
        screenFlash("right");
    } else{
        if (numberOfGuessesLeft > 1){
            numberOfGuessesLeft--;
            document.querySelector("#guessesLeft").innerHTML = `Guesses Left: ${numberOfGuessesLeft}`;
            screenFlash("wrong")
        } 
        else if (numberOfGuessesLeft === 1){
            numberOfGuessesLeft--;
            document.querySelector("#guessesLeft").innerHTML = `Guesses Left: ${numberOfGuessesLeft}`;
            window.alert("You lost...")
            screenFlash("wrong")
            giveUp();
        }   
    }
}

function giveUp() {
    screenFlash("wrong")
    document.querySelector("#name").style.display = "flex";
    document.querySelector("#image").style.display = "flex";
    document.querySelector("#pokedexEntry2").style.display = "flex";
    document.querySelector("#types").style.display = "flex";
    document.querySelector("#region").style.display = "flex";
    document.querySelector("#weight").style.display = "flex";
    document.querySelector("#height").style.display = "flex";
    document.getElementById("heightAndWeightContainer").style.minWidth = "35%";
    document.getElementById("heightAndWeightContainer").style.padding = "2%";
    document.getElementById("newPokemon").style.display = "flex";
    document.getElementById("generationSelectorContainer").style.display = "flex";

    document.getElementById("results").style.display = "none";
    document.getElementById("hintButton").style.display = "none";
    document.getElementById("leftText").style.display = "none";
    document.getElementById("giveUpButton").style.display = "none";

    numberOfHintsLeft = 0;
    document.querySelector("#hintsLeft").innerHTML = `Hints Left: ${numberOfHintsLeft}`;

    currentStreak("reset");
    stripeColor(getRegion(globalIdNum));
}

function screenFlash(inputString){
    if (inputString === "wrong"){
        document.querySelector("#body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("#body").style.backgroundColor = "rgb(38, 38, 38)";
        },  600);
    } else {
        document.querySelector("#body").style.backgroundColor = "green";
        setTimeout(function() {
            document.querySelector("#body").style.backgroundColor = "rgb(38, 38, 38)";
        },  600);
    }
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

function removeNameFromDexEntry(name, dexEntry){
    nameUpper = name.toUpperCase();
    nameLower = capitalizeFirstLetter(name.toLowerCase());
    let newDexEntry;
    if (dexEntry.includes(nameUpper)){
        newDexEntry = dexEntry.replace(new RegExp(nameUpper, "gi"), "THIS POKéMON");
        return newDexEntry;
    } else if (dexEntry.includes(nameLower)){
        newDexEntry = dexEntry.replace(new RegExp(nameLower, "gi"), "THIS POKéMON");
        return newDexEntry;
    } else {
        return dexEntry;
    }
}

function getPokemon(idNumber){
    visibleHint = [false, false, false, false, false];
    globalIdNum = idNumber;
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
                <p>${removeNameFromDexEntry(data.name, dexEntry1)}</p>
            `;
            document.querySelector("#pokedexEntry2").innerHTML = `
                <h3><u>Pokedex Entry 2:</u></h3>
                <p>${removeNameFromDexEntry(data.name, dexEntry2)}</p>
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
            document.getElementById("newPokemon").style.display = "none";
            document.getElementById("generationSelectorContainer").style.display = "none";

            document.getElementById("heightAndWeightContainer").style.minWidth = "0";
            document.getElementById("heightAndWeightContainer").style.padding = "0%";

            document.getElementById("results").style.display = "flex";
            document.getElementById("hintButton").style.display = "flex";
            document.getElementById("leftText").style.display = "flex";
            document.getElementById("giveUpButton").style.display = "flex";
            
            numberOfHintsLeft = 5;
            numberOfGuessesLeft = 3;

            document.querySelector("#hintsLeft").innerHTML = `Hints Left: ${numberOfHintsLeft}`;
            document.querySelector("#guessesLeft").innerHTML = `Guesses Left: ${numberOfGuessesLeft}`;

            const searchBar = document.getElementById('searchBar');
            searchBar.value = "";
        });
    });


}

function setTypes(index, imgNumber){

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


if (localStorage.getItem("currentStreak") === null){
    localStorage.setItem("currentStreak", 0);
}

function currentStreak(input){
    let currentStreakVar = parseInt(localStorage.getItem("currentStreak"));

    if (input === "increase"){
        currentStreakVar++;
        localStorage.setItem("currentStreak", currentStreakVar);
        document.getElementById("streak").innerHTML = `Current Streak: ${currentStreakVar}`;
    } else {
        currentStreakVar = 0;
        localStorage.setItem("currentStreak", currentStreakVar);
        document.getElementById("streak").innerHTML = `Current Streak: ${currentStreakVar}`;
    }
}


//Just picks a random pokemon on load
getPokemon(Math.floor(Math.random() * 890) + 1);