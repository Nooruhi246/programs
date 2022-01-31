<?php
    //get data from form  
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email= $_POST['email'];
        $message= $_POST['message'];
        $to = "ruhit246@gmail.com";
        $subject = "Mail From My Profile";
        $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
        $headers = "From: ".$email;
    }
    if(mail($to,$subject,$message,$headers)){
        echo "<h1>Sent Successfully</h1>"." ".$name;
    }
    else{
        echo "Something went wrong";
    }


    // if($email!=NULL){
    //     mail($to,$subject,$txt,$headers);
    // }
    // //redirect
    // header("Location:thankq.html");
?>