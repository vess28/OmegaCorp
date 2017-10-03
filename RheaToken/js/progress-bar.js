function ProgressBarStatus() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://etherchain.org/api/account/0x3a53999E9d66C6Fd95D6Eb3F1Be6114E91a3ed94", false); // false for synchronous request
    xmlHttp.send(null);

    var jsonObject = JSON.parse(xmlHttp.responseText);
    var ethBalance = jsonObject.data[0].balance / 1000000000000000000;

    //Tier EthToRht
    var ethToRheaOne = 1227.737587787842;
    var ethToRheaTwo = 1166.350779997084;
    var ethToRheaThree = 1108.03324099723;
    var ethToRheaFour = 1052.631578947368;
    var ethToRheaFive = 1000;


    //Stage 1
    var stageOneEth = 24;
    var stageOneRht = stageOneEth * ethToRheaOne;

    if (stageOneEth > 0)
        ethBalance -= stageOneEth;

    /**
    //Stage 2
    var stageTwoEth = 0;
    var stageTwoRht = stageTwoEth * ethToRheaTwo;

    if (stageTwoEth > 0)
        ethBalance -= stageTwoEth;

    //Stage 3
    var stageThreeEth = 0;
    var stageThreeRht = stageThreeEth * ethToRheaThree;

    if (stageThreeEth > 0)
        ethBalance -= stageThreeEth;

    //Stage 4
    var stageFourEth = 0;
    var stageFourRht = stageFourEth * ethToRheaFour;

    if (stageFourEth > 0)
        ethBalance -= stageFourEth;

    //Stage 5
    var stageFiveEth = 0;
    var stageFiveRht = stageFiveEth * ethToRheaFive;

    if (stageFiveEth > 0)
        ethBalance -= stageFiveEth;

    **/

    //Current stage Eth to Rht
    var totalRhtBought = (ethBalance * ethToRheaTwo) + stageOneRht;

    //Dev tokens issued
    var totalRheaTokens = totalRhtBought * (1 / 0.85);

    //Round to int
    var rheaTokensRounded = Math.round(totalRheaTokens);

    document.getElementById("rhea-sold").innerHTML = rheaTokensRounded;
}