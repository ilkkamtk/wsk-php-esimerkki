<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    // tulosta tyylit
    foreach ($tyylit as $tyyli) {
        echo "<link rel='stylesheet' href='$tyyli'>";
    }

    // tulosta skriptitägit
    foreach ($skriptit as $skripti) {
        echo "<script src='$skripti' defer></script>";
    }
    ?>
    <title>Document</title>
</head>

<body>
    <div class="container">
        <main>
            <header class="page-header">
                <div class="logo">
                    <img src="https://via.placeholder.com/200x64.png/858585/f7f1eb?text=Site+Logo" alt="Site logo">
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="index.php">Home</a>
                        </li>
                        <li>
                            <a href="products.php">Products</a>
                        </li>
                        <li>
                            <a href="contact.php">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>