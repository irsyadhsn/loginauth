<?php
   require 'koneksi.php';
   $input = file_get_contents('php://input');
   $data = json_decode($input, true);
   $pesan = [];
   $id = $data['id'];
   $kata = $data['nama'];
   $arti = $data['arti'];

   $query = mysqli_query($conn, "update kamus_user set kata='$kata', arti='$arti' where id='$id'");

   if($query){
      http_response_code(201);
      $pesan['status'] = "success";
   }else{
      http_response_code(422);
      $pesan['status'] = "failed";
   }

   echo json_encode($pesan);
   echo mysqli_error($conn);
?>