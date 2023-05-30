<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Process the email sending
  // Replace the code below with your email sending logic

  $to = "your_email@example.com";
  $subject = "New Contact Form Submission";
  $email_body = "Name: " . $name . "\n";
  $email_body .= "Email: " . $email . "\n";
  $email_body .= "Message: " . $message . "\n";

  // Send the email
  mail($to, $subject, $email_body);

  // Redirect the user to a thank you page or display a success message
  header("Location: thank_you.html");
}
?>
