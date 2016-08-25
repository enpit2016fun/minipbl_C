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
<center><img src="hoikuen.gif"  width="15%" height="15%"></center>
  <center><p>以下の入力で正しいことを確認してください
  </p></center>

<form action=http://localhost:8888/done.html method=“post”>
<font face=fantasy>
園児のお名前<BR>
</font>

<font font=sans-serif >
<?PHP echo $_POST["name"];?><BR>
</font>

<font face=fantasy>
郵便番号と住所<BR>
</font>

<font font=sans-serif >
<?PHP echo $_POST["zip11"];?><BR>
<?PHP echo $_POST["addr11"];?><BR>
</font>


<font face=fantasy>
電話番号(緊急連絡先)<BR>
</font>

<font font=sans-serif >
<?PHP echo $_POST["tel"];?><BR>
</font>


<font face=fantasy>
卒園年度(在園中の方は卒園予定年度)<BR>
</font>

<font font=sans-serif >
<?PHP echo $_POST["sotsuen"];?><font face=fantasy>年度<BR>
メールアドレス<BR>
</font>

<font font=sans-serif >
<?PHP echo $_POST["mail1"];?>@<?PHP echo $_POST["mailaddress"];?><BR>
</font>

<font face=sans-serif>
 <center><p>以上の入力でよろしければ「next」ボタンを,<BR>
変更点があれば「back」ボタンを押してください
  </p></center>
<p>
</font>
<!---
<center><button type ='submit' onClick="document.location='close.html';">登録する</button></center>
<center><button type ='submit' onClick="document.location='home.html';">戻る</button> </center>
-->
<center>
<a href="home.html"><img src="btntbn06-back005.jpg" alt="戻る"></a>
<a href="done.html"><img src="btntbn06-next005.jpg" alt="進む"></a>

</center>


</p>

</form>
<img src="tsukushi.gif"  width="50%" height="20%" ><img src="tsukushi.gif"  width="50%" height="20%">

  </body>
  </html>