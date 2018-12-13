<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['email'] == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
    if($_POST['message'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: " . $_POST['name'] . "<br/>";
        $message .= "E-mail пользователя: " . $_POST['email'] . "<br/>";
        $message .= "Номер телефона пользователя: " . $_POST['tel'] . "<br/>";
        $message .= "Текст письма: " . $_POST['message']; 
        $message .= "</br>Смета: </br> " . $_POST['estimate']; 
        $mailClient = $_POST['email'];
        send_mail($message); // отправим письмо
        send_mail2($message, $mailClient);
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    $msg_box = "OK";
    echo  $msg_box;
    /*echo json_encode(array(
        'result' => $msg_box
    ));*/
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "cis-spb@mail.ru"; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Заказ! Видеонаблюдение!!! <no-reply@test.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
      // функция отправки письма
    function send_mail2($message, $mailClient){
        // почта, на которую придет письмо
        $mail_to = $mailClient; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Заказ! Видеонаблюдение!!! <no-reply@test.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
?>