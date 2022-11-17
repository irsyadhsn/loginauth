<?php
   require 'koneksi.php';

   $input = file_get_contents('php://input');
   $pesan = [];

   $id = $_GET['id'];
   $query = mysqli_query($conn, "delete from kamus_user where id='$id'");

   if($query){
      http_response_code(201);
      $pesan['status'] = 'success';
   }else{
      http_response_code(422);
      $pesan['status'] = 'failed';
   }

   echo json_encode($data);
   echo mysqli_error($conn);
?>