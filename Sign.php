<?php
    date_default_timezone_set('UTC');
    function sign($endpoint, $force_ts=false) 
    {
        # Replace these values.
        $API_KEY = 'this-is-my-key';
        $API_SECRET = 'this-is-my-secret';
        if($force_ts) {
            $ts = $force_ts;
        } 
        else {
            $now = new DateTime();
            $ts = $now->format(DateTime::ISO8601);
        }
        $data = $endpoint . '|' . $ts;
        $hm = hash_hmac('sha256', $data, $API_SECRET);
        return array($hm, $ts);
    }
    print_r(sign('/example/endpoint', '2014-06-03T17:48:47.774453'));
    #print_r(sign('/example/endpoint'));
?>