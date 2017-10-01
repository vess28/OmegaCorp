function ProgressBarStatus() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://etherchain.org/api/account/0x0E9E3A29cC945F24c1E7E1ce15D93547BD06654b", false); // false for synchronous request
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