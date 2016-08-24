<?php
$start = 2000;
$ybak = 0;
for ($i = 0; $i < 13850; $i++) {
    $time = mktime(0, 0, 0, 1, 1 + $i, $start);
    $y = date("Y", $time);
    if ($y != $ybak) {
        $ybak = $y;
        echo PHP_EOL;
        echo date("Y", $time). "年：";
    }
    if (date("d", $time) == 13 && date("w", $time) == 5) {
        echo date("n月d日", $time). "　";
    }
}
?>
