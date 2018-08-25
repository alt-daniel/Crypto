function createRequest(modifier) {
    var xhr = new XMLHttpRequest();

//Rest api van Coinmarketcap
    xhr.open('GET', "https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=40&sort=" + modifier + "&structure=array");
    xhr.addEventListener('load', loadCoins);

    xhr.send();

    function loadCoins() {

        controlList = JSON.parse(xhr.responseText);
        var btc = controlList.data;
        console.log(btc[1].quotes.BTC.price);
        var i = 1;
        var j = 1;
        btc.forEach(function (i) {
            var coin = document.createElement("div");

            var coinContainer = document.createElement("div");
            coin.className = "col-lg-3 col-md-4 col-sm-6 coinCard";
            coinContainer.id = ('coin' + i);

            var coinHeader = document.createElement("div");
            coinHeader.className = "col-lg-12";
            coinHeader.style.backgroundColor = "#dbdbdb";
            coinHeader.style.padding = "0.5em 0.5em 0px 1em";

            var coinBody = document.createElement("div");
            coinBody.className = "col-lg-12";
            coinBody.style.backgroundColor = "white";


            //css container
            coinContainer.style.paddingBottom = "0.5em";
            coinContainer.style.border = "1px solid black";
            coinContainer.style.margin = "0.5em";
            coinContainer.style.boxShadow = '0px 2px 2px #888888';

            var coinSymbol = document.createElement("h3");
            coinSymbol.id = ('coinSymbol' + i);
            coinSymbol.style.paddingLeft = "1.5em";

            var coinName = document.createElement("p");
            coinName.id = ('coinName' + i);
            coinName.style.fontStyle = "italic";

            //Coin image uit id halen
            var coinImage = document.createElement("img");
            var coinImageBase = 'https://s2.coinmarketcap.com/static/img/coins/32x32/';
            var coinId = i.id;
            var coinUrl = (coinImageBase + coinId + ".png");
            coinImage.style.cssFloat = "left";


            var coinPrice = document.createElement("p");
            coinPrice.id = ("priceCoin" + j);
            coinPrice.innerHTML = ((i.quotes.USD.price.toPrecision(8)) + " USD");
            coinPrice.style.cssFloat = "right";

            var pCoin1H = document.createElement("p");
            var pCoin24H = document.createElement("p");
            var pCoin7D = document.createElement("p");

            pCoin1H.id = ("coin1H" + j);
            pCoin24H.id = ("coin24H" + j);
            pCoin7D.id = ("coin7D" + j);

            pCoin1H.style.marginBottom = "0";
            pCoin24H.style.marginBottom = "0";
            pCoin7D.style.marginBottom = "0";


            var coin1H = i.quotes.USD.percent_change_1h;
            var coin24H = i.quotes.USD.percent_change_24h;
            var coin7D = i.quotes.USD.percent_change_7d;

            //assign classNames
            coin1H


            // Rood als percentage negatief is, groen als het positief is
            if (coin1H < 0) {
                pCoin1H.style.color = "red";
            } else {
                pCoin1H.style.color = "green";
            }
            if (coin24H < 0) {
                pCoin24H.style.color = "red";
                // coinContainer.style.backgroundColor = "#FF8B86";
            } else {
                pCoin24H.style.color = "green";
                // coinContainer.style.backgroundColor = "lightgreen";
            }
            if (coin7D < 0) {
                pCoin7D.style.color = "red";
            } else {
                pCoin7D.style.color = "green";
            }

            pCoin1H.innerHTML = "1H: " + coin1H + "%";
            pCoin24H.innerHTML = "24H: " + coin24H + "%";
            pCoin7D.innerHTML = "7D: " + coin7D + "%";

            coinImage.src = coinUrl;

            coinSymbol.innerHTML = i.symbol;
            coinName.innerHTML = i.name;

            coinHeader.appendChild(coinPrice);
            coinHeader.appendChild(coinImage);
            coinHeader.appendChild(coinSymbol);

            coinContainer.appendChild(coinHeader);


            coinHeader.appendChild(coinName)
            coinBody.appendChild(pCoin1H);
            coinBody.appendChild(pCoin24H);
            coinBody.appendChild(pCoin7D);

            coinContainer.appendChild(coinBody);
            coin.appendChild(coinContainer);

            // document.getElementById('coin' + i).appendChild(document.getElementById('coinSymbol' + i));


            document.getElementById("mainBlock").appendChild(coin);

            i++;
            j++;
            console.log(i.name)
        })

    }
}




