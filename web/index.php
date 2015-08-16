<?php
require_once(__DIR__.'/../vendor/autoload.php');
$config = require_once(__DIR__.'/../config/main.php');
(new humanity\Config($config));
(new humanity\Site);
?>
