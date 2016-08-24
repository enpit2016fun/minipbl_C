<?php
header('Content-Type: text/html; charset=UTF-8');
echo '文字化けしない';
?>

<html lang="ja">
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">


     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, user-sScalable=no, minimum-scale=1.0, maximum-scale=1.0">

      <link href="assets/ratchet/css/ratchet.css" rel="stylesheet">
      <link href="assets/css/styles.css" rel="stylesheet">
 <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
  </head>
  <body>

 <div class='header'><h1>つくしの子保育園　園児名簿登録 確認画面</h1></div>
 <div class='header'><h2><center>つくしの子保育園<BR>　園児名簿登録　確認画面</center></h2></div>
  <p>以下の入力で正しいことを確認してください
  </p>
  <FORM>
  園児のお名前<BR>
<?PHP echo $_POST[“name”];?>
  住所<BR>
<?PHP echo $_POST[“zip11”];?>
<?PHP echo $_POST[“addr11”];?>
  電話番号(緊急連絡先)<BR>
<?PHP echo $_POST[“mail”];?>

  卒園年度(在園中の方は卒園予定年度)<BR>
<?PHP echo $_POST[“sotuen”];?>

 <p>以上の入力でよろしければ「登録する」ボタンを,<BR>
変更点があれば「戻る」ボタンを押してください
  </p>
<p>
<button class="help-btn"><center><A href=“home.html”>戻る</A></center></button>
<button class="help-btn"><center><A href=“home.html”>登録する</A></center></button>
</p>
</FORM>

  </body>
  </html>
