<?php
return function($email,$password,$v2,$v1){
    return ['msg'=>'ok','info'=>'registration','email'=>$email,'password'=>$password,'v2'=>$v2,'v1'=>$v1];
}
?>
