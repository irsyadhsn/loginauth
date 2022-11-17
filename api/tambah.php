<?php
   require 'koneksi.php';

   $input = file_get_contents('php://input');
   $data = json_decode($input, true);

   $pesan = [];
   $kata = trim($data['kata']);
   $arti = trim($data['arti']);

   $query = mysqli_query($conn, "insert into kamus_user(kata, arti) values('$kata', '$arti')");

   if($query){
      http_response_code(201);
      $pesan['status'] = 'success';
   }else{
      http_response_code(422);
      $pesan['status'] = 'failed';
   }

   echo json_encode($pesan);
   echo mysqli_error($koneksi);
?>