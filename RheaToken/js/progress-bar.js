function ProgressBarStatus() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://etherchain.org/api/account/0x1f61A496Ea34d55370F0efeEAf3c2bd59A8AF62E", false); // false for synchronous request
    xmlHttp.send(null);

    var jsonObject = JSON.parse(xmlHttp.responseText);
    var ethBalance = jsonObject.data[0].balance / 1000000000000000000;

    var ethToRhea = 1227.737587787842;

    var totalBought = ethBalance * ethToRhea;

    var totalRheaTokens = totalBought * (1 / 0.85);

    var rheaPercent = (totalBought / 50000000) * 100;
    var rheaPercentRounded = Math.round(rheaPercent * 100) / 100

    document.getElementById("rhea-percent").innerHTML = rheaPercentRounded + "%";
    document.getElementById("rhea-progress").style.width = (rheaPercentRounded + "%");

    return rheaPercentRounded;
}