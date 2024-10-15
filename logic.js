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
        long: "Rohrbach",
    },
    {
        short: "SE",
        long: "Rohrbach",
    },
    {
        short: "SR",
        long: "Rohrbach",
    },
    {
        short: "UU",
        long: "Rohrbach",
    },
    {
        short: "VB",
        long: "Rohrbach",
    },
    {
        short: "WE",
        long: "Rohrbach",
    },
    {
        short: "WL",
        long: "Rohrbach",
    }
]
let plateNumbers = document.querySelector("#plateAlphanumeric");
let plateGeneratorBtn = document.querySelector("#plateGeneratorBtn");

plateGeneratorBtn.addEventListener("click", () => plateNumbers.textContent = `${bezirkListe[Math.floor(Math.random() * 17)].short} 1A34C`);



