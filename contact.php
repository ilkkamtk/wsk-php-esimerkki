<?php
$tyylit = [
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    './css/style.css'
];


$skriptit = [
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    './js/avi.js',
    './js/contact.js'
];
include 'inc/header.php';
?>
<section id="contact">
    <div>
        <header>
            <h2>Contact us</h2>
        </header>
        <div class="split-contact">
            <address>
                Visit us at:<br>
                CompanyX<br>
                Karaportti 2<br>
                02340 ESPOO<br>
                Finland<br>
                Email: <a href="mailto:info@metropolia.fi">info@metropolia.fi</a><br>
                Phone:<a href="tel:+358401231233">+358 (0)401231233</a>
            </address>
            <div id="map"></div>
        </div>
    </div>
</section>
<?php
    include 'inc/footer.php';
?>
