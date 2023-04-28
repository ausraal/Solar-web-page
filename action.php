<?php

if (isset($_POST['submit']))
{
    print_r($_POST);
$name = htmlspecialchars($_POST['clientName']);
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNum'];
$filteredNumber = str_replace("-", "", filter_var($phoneNumber,  FILTER_SANITIZE_NUMBER_INT));
$comment = htmlspecialchars($_POST['comments']);
$town = htmlspecialchars($_POST['town']);
$range = $_POST['customRange'];
$elType = $_POST['exampleRadios'];

$headers = "From: ausra.al@gmail.com";
$headers .= "Reply-To: ".$email;
$headers .= "X-Mailer: PHP/" . phpversion();
    ini_set("sendmail_from", "ausra.al@gmail.com");
    ini_set("SMTP", "smtp.example.com");
    ini_set("smtp_port", "587"); //port and SMTP probably incorrect. How to get correct parameters?
$emailTo = 'ausra.al@gmail.com';
$emailHeader = "Nuo: " . $email;
$emailBody = "Gavote laišką iš siuntėjo: ".$name.".\n\n Telefono nr. ". 
        $filteredNumber.".\n\n Pasirinktas elektros suvartojimas: ".
        $range.".\n\n Pasirinktas elektrinės tipas: ".
        $elType . ".\n\n Žinutė: ".
        $comment;
$emailSubject = 'Naujas užsakymas';

    if(mail($emailTo, $emailSubject, $emailBody, $headers, "-f ausra.al@gmail.com")) {
        $message = "Jūsų žinutė sėkmingai išsiųsta";
        header("Location: index.html");
    } else{
        $message = "Klaida siunčiant žinutę. Bandykite dar kartą.";
    }

}




