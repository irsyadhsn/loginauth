<?php
   require 'koneksi.php';
   $data = [];
   $query = mysqli_query($conn, "select * from kamus_user");

   while($row = mysqli_fetch_object($query)){
      $data[] = $row;
   }

   // tampilkan dalam bentuk json
   echo json_encode($data);
   echo mysqli_error($conn);
?>