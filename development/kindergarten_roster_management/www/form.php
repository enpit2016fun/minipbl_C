
<!DOCTYPE HTML>

<html lang="ja">

<head>

<meta charset="UTF-8">

<title>GET POST</title>

</head>

<body style="padding:20px;">

    <div>

        <p>【GET】</p>

        <form method="GET" action="form.php">

            <input type="text" name="text" value="">

            <input type="submit" name="btn" value="GET送信">

        </form>

 

        <p>【POST】</p>

        <form method="POST" action="form.php">

            <input type="text" name="text" value="">

            <input type="submit" name="btn" value="POST送信">

        </form>

 

        <?PHP

        echo "GETの中身<pre>";

        var_dump($_GET);

        echo "</pre>";

 

        echo "POSTの中身<pre>";

        var_dump($_POST);

        echo "</pre>";

        ?>

    </div>

</body>

</html>