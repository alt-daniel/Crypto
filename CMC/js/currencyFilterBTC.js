function convertToBtc() {

    var btc2 = controlList.data;
    for (i=1 ; i < 21; i++){
        document.getElementById("priceCoin"+i).innerHTML = (btc2[i-1].quotes.BTC.price.toPrecision(8)) + " BTC";

        document.getElementById("coin1H" +i).innerHTML = "1H: " + (btc2[i-1].quotes.BTC.percent_change_1h) + " %";
        document.getElementById("coin24H" +i).innerHTML = "24H: " + (btc2[i-1].quotes.BTC.percent_change_24h) + " %";
        document.getElementById("coin7D" +i).innerHTML = "7D: " + (btc2[i-1].quotes.BTC.percent_change_7d) + " %";

        //css rood bij negatieve percemtages, groen bij positief

        if (btc2[i-1].quotes.BTC.percent_change_1h < 0){
            document.getElementById("coin1H" +i).style.color = "red";
        } else{
            document.getElementById("coin1H" +i).style.color = "green";
        }
        if (btc2[i-1].quotes.BTC.percent_change_24h < 0){
            document.getElementById("coin24H" +i).style.color = "red";
        } else{
            document.getElementById("coin24H" +i).style.color = "green";
        }
        if (btc2[i-1].quotes.BTC.percent_change_7d < 0){
            document.getElementById("coin7D" +i).style.color = "red";
        } else{
            document.getElementById("coin7D" +i).style.color = "green";
        }



    }

}


