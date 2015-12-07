<?php
    function getPrice($url)
    {
        $decode = file_get_contents($url);
        return json_decode(decode, true);
    }

    $btcUSD = getPrice('https://btc-e.com/api/2/ltc_usd/ticker');
    $btcPrice = $btcUSD["ticker"]["last"];

    $btcDisplay = round($btcPrice, 2);
?>

