
var xhr = new XMLHttpRequest();


xhr.open('GET',  "https://api.blockchain.info/stats");
xhr.addEventListener('load', loadCoins);

xhr.send();

function loadCoins() {

    controlList = JSON.parse(xhr.responseText);


    var btcPrijs = controlList.market_price_usd;
    var totalBtc = controlList.totalbc;


    var tradeVolumeBtc = controlList.trade_volume_usd;

    var btcPrijs2 ="$ " + btcPrijs;
    var totalBtc2 = "BTC " + parseInt(totalBtc)/100000000;
    var tradeVolumeBtc2 = "$ " + tradeVolumeBtc;


    //p tags
    pPrijsBtc = document.getElementById('prijsBtc');
    pVolumeBtc =  document.getElementById('volumeBtc');
    pVolumeUsd = document.getElementById('volumeBtcInUsd')

    pPrijsBtc.innerHTML = btcPrijs2;
    pVolumeBtc.innerHTML = totalBtc2;
    pVolumeUsd.innerHTML = tradeVolumeBtc2;

    //styling

    pPrijsBtc.style.color = "red";
    pVolumeBtc.style.color = "green";
    pVolumeUsd.style.color = "blue";




}
