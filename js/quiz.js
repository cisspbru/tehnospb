 square = 0;
 str_q1 = "пусто";
 temp = "пусто";
 tmp2 = "пусто";

function next(question,direction) {
    
    var q_title = document.getElementById('q_title');
    var q_progress_bar = document.getElementById('q_progress_bar');
    var q_main_content = document.getElementById('q_main_content');
    var q_button = document.getElementById('q_button');
    var q_additional_content = document.getElementById('q_additional_content');
    
    
    switch (question) {

        case 'question1':
            
            q_title.innerHTML = "Куда требуется видеонаблюдение?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:10%\"></div></div></div><div class=\"textRow2\">1-ый вопрос из 9</div>';
            q_main_content.innerHTML = q_main_content_generator();
            q_button.innerHTML = "<div class=\"row5\" ><button onclick=\"next('question2');\" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q1.1.png\" alt=\"\"> </div><div class=\"right_text\"><hr>В первую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета.</div><div class=\"right_footer\"><div class=\"rf_img\"><img src=\"img/small-logo2.png\" alt=\"\"> </div><div class=\"rf_text\">Установка систем безопасности \"под ключ\"</div></div>";
            break;
        case 'question2':
            if (direction == 'forward') { temp = document.getElementById('q1').value; }
            q_title.innerHTML = "Какое расстояние от видеорегистратора до камер?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:20%\"></div></div></div><div class=\"textRow2\">2-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q2\"><div class=\"text-q2\">Укажите общую длину кабеля</div><input type=\"number\" id = \"q2\" value = \"" + square+"\"> <div class=\"check-q2\"><input type=\"checkbox\" id=\"chack_q2\" name=\"chack\" value=\"chack\">   Не знаю (в данном случае стоимость будет указана за метр)</div></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question1','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question3','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q2.png\" alt=\"\"> </div><div class=\"right_text\"><hr>Нужно измерить расстояние от видеорегистратора до камер. На примере показано как примерно следует делать измерения.</div><div class=\"right_footer\"><div class=\"rf_img\"><img src=\"img/small-logo2.png\" alt=\"\"> </div><div class=\"rf_text\">Установка систем безопасности \"под ключ\"</div></div>";
            break;
        case 'question3':
            if (direction == 'forward') { square = document.getElementById('q2').value }
            q_title.innerHTML = "Сколько понадобится видеокамер?";            
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:30%\"></div></div></div><div class=\"textRow2\">3-ий вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q3\"><div class=\"q3_street\">Выберите количество уличных камер   <select id=\"question3\"><option value=\"choice\">-Выбрать-</option><option value=\"nol\">Не знаю, жду рекоомендаций</option><option value=\"odin\">1</option><option value=\"dva\">2</option><option value=\"tri\">3</option><option value=\"chetyre\">4</option><option value=\"pyt\">5</option><option value=\"shest\">6</option><option value=\"sem\">7</option><option value=\"vosem\">8</option><option value=\"devat\">9</option><option value=\"desat\">10</option><<option value=\"eleven\">Более 10-ти</option></select></div><div class=\"q3_home\">Выберите количество внутренних   <select id=\"question3\"><option value=\"choice\">-Выбрать-</option><option value=\"nol\">Не знаю, жду рекоомендаций</option><option value=\"odin\">1</option><option value=\"dva\">2</option><option value=\"tri\">3</option><option value=\"chetyre\">4</option><option value=\"pyt\">5</option><option value=\"shest\">6</option><option value=\"sem\">7</option><option value=\"vosem\">8</option><option value=\"devat\">9</option><option value=\"desat\">10</option><<option value=\"eleven\">Более 10-ти</option></select></div></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question2','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question4','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "В третью очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question4':
            if (direction == 'forward') { }
            q_title.innerHTML = "Сколько хранить запись с камер?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:40%\"></div></div></div><div class=\"textRow2\">4-ый вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  1-2 недели</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  3-4 недели</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  5-6 недель</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Не знаю. Нужна консультация.</div></div></label></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question3','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question5','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "В четвертую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question5':
            if (direction == 'forward') { }
            q_title.innerHTML = "Какие есть специфические задачи?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:50%\"></div></div></div><div class=\"textRow2\">5-ый вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q5\"><div class=\"text-q5\">Можно выбрать несколько вариантов</div><label><div class=\"check-q5\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Запись звука</div></label><label><div class=\"check-q5\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Распознавание лиц</div></label><label><div class=\"check-q5\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Распознавание автомобильных номеров</div></label><label><div class=\"check-q5\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Удаленный доступ</div></label></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question4','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question6','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "В пятую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question6':
            if (direction == 'forward') { }
            q_title.innerHTML = "Вам важнее цена или качество?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:60%\"></div></div></div><div class=\"textRow2\">6-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Важно сделать как можно дешевле</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Нужно сделать хорошо, но за оптимальную цену</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Качество важнее, чем цена</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Не знаю. Нужна консультация.</div></div></label></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question5','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question7','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "В шестую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question7':
            if (direction == 'forward') { }
            q_title.innerHTML = "Где находится объект?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:70%\"></div></div></div><div class=\"textRow2\">7-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  В пределах КАД</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  До 50-ти км от КАД</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Более 50-ти км от КАД</div></div></label> </div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question6','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question8','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "В седьмую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question8':
            if (direction == 'forward') { }
            q_title.innerHTML = "Как срочно вам нужна система?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:80%\"></div></div></div><div class=\"textRow2\">8-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Как можно быстрее</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Через 2-3 недели</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Пока просто проверяю цены</div></div></label> </div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question7','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question9','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "В восьмую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question9':
            if (direction == 'forward') { }
            q_title.innerHTML = "девятый ворос";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:90%\"></div></div></div><div class=\"textRow2\">9-ый вопрос из 9</div>';
            q_main_content.innerHTML = "контент девятый";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question8','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question10','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "Вдевятую  очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
    }
}

function  q_main_content_generator() {
    var image_q1 = ["\"img/quiz/imgQuiz1.png\"", "\"img/quiz/imgQuiz2.png\"", "\"img/quiz/imgQuiz3.png\"", "\"img/quiz/imgQuiz4.png\"", "\"img/quiz/imgQuiz5.png\"", "\"img/quiz/imgQuiz6.png\"", "\"img/quiz/imgQuiz7.png\"", "\"img/quiz/imgQuiz8.png\""];

    var text_n1 = ["Дом", "Салон", "Мойка", "Офис", "Квартира", "Магазин", "Кафе", "Склад", "Ваш вариант"];
    var value_n1 = ["home", "salon", "car_wash", "office", "aprt", "market", "cafe", "storage", "yourVariant"];
    var content_n1 = "<div class=\"row3\">";
    var content_n2;    
    var content_n3;
    var content_n4;
    var content_n5 = "</div>";
    var content_n6 = "<label><div class=\"row4\"><div class=\"textRow4\"> <input type=\"radio\" class=\"option-input radio\" name=\"example\"  value=\"yourVariant\"/>  Ваш вариант</div><div class=\"inputRow4\"><input type=\"text\" id=\"inputText\"></div></div></label>";
    var content = "";
    for (var i = 0; i <= 7; i++) {
         content_n2 = "<div class=\"radio1\"> <label> <div class=\"img-radio1\"><img ";
         content_n3 = "src =" + image_q1[i] + "alt=\"\"></div><div class=\"text-radio1\"> <input type = \"radio\" class=\"option-input radio\" id = \"q1\" name=\"example\"  value =\"" + value_n1[i] + "\" >  ";
         content_n4 = text_n1[i] + "</div ></label> </div>";
         content += content_n2 + content_n3 + content_n4;    
    }

    return content_n1 + content + content_n6 + content_n5;
    
}