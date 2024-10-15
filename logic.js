const bezirkListe = [
    {
        short: "BR",
        long: "Braunau",
    },
    {
        short: "EF",
        long: "Eferding",
    },
    {
        short: "FR",
        long: "Freistadt",
    },
    {
        short: "GM",
        long: "Gmunden",
    },
    {
        short: "KI",
        long: "Kirchdorf an der Krems",
    },
    {
        short: "L",
        long: "Linz - Stadt",
    },
    {
        short: "LL",
        long: "Linz/Land",
    },
    {
        short: "PE",
        long: "Perg",
    },
    {
        short: "RI",
        long: "Ried im Innkreis",
    },
    {
        short: "RO",
        long: "Rohrbach",
    },
    {
        short: "SD",
        long: "Schärding",
    },
    {
        short: "SE",
        long: "Steyr/Land",
    },
    {
        short: "SR",
        long: "Steyr",
    },
    {
        short: "UU",
        long: "Urfahr Umgebung",
    },
    {
        short: "VB",
        long: "Vöcklabruch",
    },
    {
        short: "WE",
        long: "Wels",
    },
    {
        short: "WL",
        long: "Wels/Land",
    }
]
let plateNumbers = document.querySelector("#plateAlphanumeric");
let plateGeneratorBtn = document.querySelector("#plateGeneratorBtn");
let submitBtn = document.querySelector("#submitBtn");
let bezirkInput = document.querySelector("#bezirkInput");
let successText = document.querySelector("#successText"); 
let currentIndex;

plateGeneratorBtn.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * 17);
    plateNumbers.textContent = `${bezirkListe[currentIndex].short} 1A34C`
});

submitBtn.addEventListener("click", () => {
    if(bezirkListe[currentIndex].long === bezirkInput.value) {
        successText.textContent = "Richtig!"
        successText.style.color = "green";
    } else {
        successText.textContent = "Falsch...." 
        successText.style.color = "red";
    }
});

