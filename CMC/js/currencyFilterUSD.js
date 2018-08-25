function convertToUsd() {


    var btc3 = controlList.data;
    for (i=1 ; i < 21; i++){
        document.getElementById("priceCoin"+i).innerHTML = (btc3[i-1].quotes.USD.price.toPrecision(8)) + " USD";

        document.getElementById("coin1H" +i).innerHTML = "1H: " + (btc3[i-1].quotes.USD.percent_change_1h) + " %";
        document.getElementById("coin24H" +i).innerHTML = "24H: " + (btc3[i-1].quotes.USD.percent_change_24h) + " %";
        document.getElementById("coin7D" +i).innerHTML = "7D: " + (btc3[i-1].quotes.USD.percent_change_7d) + " %";

        //css rood bij negatieve percemtages, groen bij positief

        if (btc3[i-1].quotes.USD.percent_change_1h < 0){
            document.getElementById("coin1H" +i).style.color = "red";
        } else{
            document.getElementById("coin1H" +i).style.color = "green";
        }
        if (btc3[i-1].quotes.USD.percent_change_24h < 0){
            document.getElementById("coin24H" +i).style.color = "red";
        } else{
            document.getElementById("coin24H" +i).style.color = "green";
        }
        if (btc3[i-1].quotes.USD.percent_change_7d < 0){
            document.getElementById("coin7D" +i).style.color = "red";
        } else{
            document.getElementById("coin7D" +i).style.color = "green";
        }


    }

}