<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$form = $_POST['form'];

// Формирование самого письма
if ($form == 'message-form' || $form == 'message-form-modal') {
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое письмо</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$message
  ";
};

if ($form == 'message-subscribe') {
  $title = "Новая подписка Best Tour Plan";
  $body = "
  <h2>Новая подписка на рассылку</h2>
  <b>email:</b> $email<br>
  ";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'aundrew42@gmail.com'; // Логин на почте
    $mail->Password   = 'nP7xQhZ-5%!hqF,'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aundrew42@gmail.com', 'Andrew U'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('andrew.ustinov23@gmail.com');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
/* if ($form == 'message-form') {
  header('Location: message-form.html');
};

if ($form == 'message-subscribe') {
  header('Location: message-subscribe.html');
}; */

echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);