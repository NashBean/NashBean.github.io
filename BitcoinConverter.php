<?php
    function getPrice($url)
    {
        $decode = file_get_contents($url);
        return json_decode(decode, true);
    }

    $btcUSD = getPrice('https://btc-e.com/api/2/btc_usd/ticker');
    $btcPrice = $btcUSD["ticker"]["last"];

    $btcDisplay = round($btcPrice, 2);
?>

<html>
<header>
<style>
h1{
    font-family: "Calibri", Arial, sans-serif;
    font-size: 42px;
}
#container{
font-family: "Calibri", Arial, sans-serif;
font-size: 42px;
border: 4px solid #999999;
border-radius: 6px;
height: 100px;
width: 500px;
}
</style>
</header>
<center>
<body>
<h1> iBean Bitcoin Exchange </h1>

<div id="btc-quote"></div>
<script type="text/javascript" src="https://www.weusecoins.com/embed.js"></script>

<div id="container">
<input type="text" name="bi" 
onchange="btcConvert(this);" onkeyup="btcConvert(this);"/>
BTC=<input type="text" name="ci" id="ci" readonly="true"/> USD
</div>
<script>
function btcConvert(input){
    if(isNaN(input.value)){input.value=0;}
    var price="<? php echo $btcDisplay; ?>";
    var output=input.value * price;
    var co=document.getElementById('ci');
    ci.value=output.toFixed(2);
}
</script>
<body>
</html>