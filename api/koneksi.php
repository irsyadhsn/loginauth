<?php
   // cors policy handler
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
   header('Access-Control-Allow-Headers: X-Requested-With');
   header('Content-Type: application/json; charset=utf-8');

   // mysql conn
   $conn = mysqli_connect('localhost', 'root', '', 'kamus_jaksel_db') or die ('koneksi gagal');
?>