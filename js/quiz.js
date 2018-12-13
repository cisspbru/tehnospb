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
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:10%\">1-ой вопрос из 9</div>";
            q_main_content.innerHTML = q_main_content_generator();
            q_button.innerHTML = "<button onclick=\"next('question2','forward'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В первую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question2':
            if (direction == 'forward') { temp = document.getElementById('q1').value; }
            q_title.innerHTML = "введите площадь помещения";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:20%\">2-ой вопрос из 9</div>";
            q_main_content.innerHTML = "площадь помещения в кв метрах <input type=\"number\" id = \"q2\" value = \"" + square+"\">";
            q_button.innerHTML = "<button onclick=\"next('question1','back');\" class=\"input-btn\">назад</button>    <button onclick=\"next('question3','forward');\" class=\"input-btn\">далее</button>";
            q_additional_content.innerHTML = "Во вторую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question3':
            if (direction == 'forward') { square = document.getElementById('q2').value }
            q_title.innerHTML = "третий ворос";            
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:30%\">3-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент третий площадь:" + square;
            q_button.innerHTML = "<button onclick=\"next('question2','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question4'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В третью очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question4':
            if (direction == 'forward') { }
            q_title.innerHTML = "четвертый ворос";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:40%\">4-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент четвертый";
            q_button.innerHTML = "<button onclick=\"next('question3','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question5','forward'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В четвертую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question5':
            if (direction == 'forward') { }
            q_title.innerHTML = "пятый ворос";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:50%\">5-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент пятый";
            q_button.innerHTML = "<button onclick=\"next('question4','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question6'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В пятую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question6':
            if (direction == 'forward') { }
            q_title.innerHTML = "шестой ворос";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:60%\">6-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент шестой";
            q_button.innerHTML = "<button onclick=\"next('question5','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question7','forward'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В шестую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question7':
            if (direction == 'forward') { }
            q_title.innerHTML = "седьмой ворос";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:70%\">7-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент седьмой";
            q_button.innerHTML = "<button onclick=\"next('question6','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question8','forward'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В седьмую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question8':
            if (direction == 'forward') { }
            q_title.innerHTML = "восьмой ворос";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:80%\">8-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент восьмой";
            q_button.innerHTML = "<button onclick=\"next('question7','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question9','forward'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "В восьмую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
        case 'question9':
            if (direction == 'forward') { }
            q_title.innerHTML = "девятый ворос";
            q_progress_bar.innerHTML = "<div class=\"w3-container w3-green w3-center\" style=\"width:100%\">9-ой вопрос из 9</div>";
            q_main_content.innerHTML = "контент девятый";
            q_button.innerHTML = "<button onclick=\"next('question8','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question1'); \" class=\"input-btn\">Далее</button>";
            q_additional_content.innerHTML = "Вдевятую  очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета."
            break;
    }
}

function  q_main_content_generator() {
    var image_q1 = ["\"img/quiz/imgQuiz1.png\"", "\"img/quiz/imgQuiz2.png\"", "\"img/quiz/imgQuiz3.png\"", "\"img/quiz/imgQuiz4.png\"", "\"img/quiz/imgQuiz5.png\"", "\"img/quiz/imgQuiz6.png\"", "\"img/quiz/imgQuiz7.png\"", "\"img/quiz/imgQuiz8.png\""];

    var text_n1 = ["Дом", "Салон", "Мойка", "Офис", "Квартира", "Магазин", "Кафе", "Склад"];
    var value_n1 = ["home", "salon", "car_wash", "office", "aprt", "market", "cafe", "storage"];
    var content_n1 = "<div class=\"row3\">";
    var content_n2;    
    var content_n3;
    var content_n4;
    var content_n5 = "</div>";
    var content_n6 = "<div class=\"row4\"><div class=\"textRow4\">Ваш вариант</div><div class=\"inputRow4\"><input type=\"text\" id=\"inputText\"></div></div>";
    var content = "";
    for (var i = 0; i <= 7; i++) {
         content_n2 = "<div class=\"radio1\"> <label> <div class=\"img-radio1\"><img ";
         content_n3 = "src =" + image_q1[i] + "alt=\"\"></div><div class=\"text-radio1\"> <input type = \"radio\" class=\"option-input radio\" id = \"q1\" value =\"" + value_n1[i] + "\" >";
         content_n4 = text_n1[i] + "</div ></label> </div>";
         content += content_n2 + content_n3 + content_n4;    
    }

    return content_n1 + content + content_n6 + content_n5;
    
}