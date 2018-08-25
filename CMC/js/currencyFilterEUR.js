var xhrEur = new XMLHttpRequest();

//Rest api van Coinmarketcap
xhrEur.open('GET',  "https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=40&sort=rank&structure=array");


xhrEur.send();


function convertToEur() {

    controlListEUR = JSON.parse(xhrEur.responseText);
    var eur = controlListEUR.data;
console.log(eur[2].quotes.EUR.price);


    for (i=1 ; i < 20; i++){
        document.getElementById("priceCoin"+i).innerHTML = (eur[i-1].quotes.EUR.price.toPrecision(8)) + " EUR";

        document.getElementById("coin1H" +i).innerHTML = "1H: " + (eur[i-1].quotes.EUR.percent_change_1h) + " %";
        document.getElementById("coin24H" +i).innerHTML = "24H: " + (eur[i-1].quotes.EUR.percent_change_24h) + " %";
        document.getElementById("coin7D" +i).innerHTML = "7D: " + (eur[i-1].quotes.EUR.percent_change_7d) + " %";

        //css rood bij negatieve percemtages, groen bij positief

        if (eur[i-1].quotes.EUR.percent_change_1h < 0){
            document.getElementById("coin1H" +i).style.color = "red";
        } else{
            document.getElementById("coin1H" +i).style.color = "green";
        }
        if (eur[i-1].quotes.EUR.percent_change_24h < 0){
            document.getElementById("coin24H" +i).style.color = "red";
        } else{
            document.getElementById("coin24H" +i).style.color = "green";
        }
        if (eur[i-1].quotes.EUR.percent_change_7d < 0){
            document.getElementById("coin7D" +i).style.color = "red";
        } else{
            document.getElementById("coin7D" +i).style.color = "green";
        }

    }

}