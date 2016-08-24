<!DOCTYPE html>
<html>
 <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, user-sScalable=no, minimum-scale=1.0, maximum-scale=1.0">
  
      <link href="assets/ratchet/css/ratchet.css" rel="stylesheet">
      <link href="assets/css/styles.css" rel="stylesheet">
  </head>
  <body>

<div class='header'><h2><center><font face=monospace>つくしの子保育園<BR>　園児名簿登録　確認画面</font></center></h2></div>
  <center><p>以下の入力で正しいことを確認してください
  </p></center>

<form action=http://localhost:8888/done.html method=“post”>
<font face=fantasy>
園児のお名前<BR>
<?PHP echo $_POST["name"];?><BR>
郵便番号と住所<BR>
<?PHP echo $_POST["zip11"];?><BR>
<?PHP echo $_POST["addr11"];?><BR>
電話番号(緊急連絡先)<BR>
<?PHP echo $_POST["tel"];?><BR>

メールアドレス<BR>
<?PHP echo $_POST["mail"];?><BR>

卒園年度(在園中の方は卒園予定年度)<BR>
<?PHP echo $_POST["sotuen"];?><BR>

 <center><p>以上の入力でよろしければ「登録する」ボタンを,<BR>
変更点があれば「戻る」ボタンを押してください
  </p></center>
<p>
</font>
<center><button type ='submit' name='action' value='kakunin'>登録する</button></center>
</p>

</form>
  </body>
  </html>