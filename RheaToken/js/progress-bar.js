function ProgressBarStatus() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://etherchain.org/api/account/0x3a53999E9d66C6Fd95D6Eb3F1Be6114E91a3ed94", false); // false for synchronous request
    xmlHttp.send(null);

    var jsonObject = JSON.parse(xmlHttp.responseText);
    var ethBalance = jsonObject.data[0].balance / 1000000000000000000;

    var ethToRhea = 1227.737587787842;

    var totalBought = ethBalance * ethToRhea;

    var totalRheaTokens = totalBought * (1 / 0.85);
    var rheaTokensRounded = Math.round(totalRheaTokens);

    document.getElementById("rhea-sold").innerHTML = rheaTokensRounded;
}