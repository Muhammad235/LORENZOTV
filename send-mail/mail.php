<?php

//headers
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");


if ($_SERVER['REQUEST_METHOD'] === "POST") {
    
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->name) && !empty($data->email) && !empty($data->number) && !empty($data->message) ) {

        try {

            $to = "info@lorenzotvmovies.com ";
          
             $subject = "NEW MESSAGE";
     
             $message = "Name: " . $data->name . "<br>"
                 . "Email: " . $data->email . "<br>"
                 . "Number: " . $data->number . "<br>"
                 . "Message: " . $data->message;
     
             // Always set content-type when sending HTML email
             $headers = "MIME-Version: 1.0" . "\r\n";
             $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
     
             // More headers
               $headers .= 'From: LORENZO info@lorenzotvmovies.com ' . "\r\n";
           //  $headers .= "From: $email \r\n";
     
             
     
             mail($to, $subject, $message, $headers);
             
             // 201- successfully

            http_response_code(201);
                echo json_encode(array(
                "status" => 201,
                "message" => "Message sent successfully!"
            ));


        } catch (Exception $th) {

            http_response_code(500); //internal server error

            echo json_encode(array(
                "status" => 500,
                "message" => $ex->getMessage()
            ));
            
        }

    }else {
        http_response_code(400); //bad request

        echo json_encode(array(
            "status" => 400,
            "message" => "Provide all parameters"
        ));
    }
}else {
    http_response_code(405); // method not allowed

    echo json_encode(array(
        "status" => 405,
        "message" => "Access denied, only POST methd is allowed"
    ));
}
