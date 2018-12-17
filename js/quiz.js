 square = 0;
 str_q1 = "пусто";
 temp = "пусто";
 tmp2 = "пусто";
 q1 = "";
 q6 ="пусто";
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
            q_additional_content.innerHTML = "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q1.1.png\" alt=\"\"> </div><div class=\"right_text\"><hr>В первую очередь важен тип объекта, поэтому для начала выберите куда нужно уствновить систему. Это повысит точность расчета.</div><im</div>";
            break;
        case 'question2':
            if (direction == 'forward') { q1 = document.getElementsByName('example').value; } 
            q_title.innerHTML = "Какое расстояние от видеорегистратора до камер?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:20%\"></div></div></div><div class=\"textRow2\">2-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q2\"><div class=\"text-q2\">Укажите общую длину кабеля в метрах</div><input type=\"number\" id = \"q2\" value = \"" + square+"\"> <div class=\"check-q2\"><input type=\"checkbox\" id=\"chack_q2\" name=\"chack\" value=\"chack\">   Не знаю (в данном случае стоимость будет указана за метр)</div></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question1','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question3','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "<div class=\"quiz1right\"><div class=\"right_img\"><img src=\"img/q2.png\" alt=\"\"> </div><div class=\"right_text\"><hr>Нужно измерить расстояние от видеорегистратора до камер. На примере показано, как ориентировочно следует делать измерения.</div></div>";
            break;
        case 'question3':
            if (direction == 'forward') { square = document.getElementById('q2').value }
            q_title.innerHTML = "Сколько понадобится видеокамер?";            
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:30%\"></div></div></div><div class=\"textRow2\">3-ий вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q3\"><div class=\"q3_street\"><div class=\"q3_street_img\"><img src=\"img/q3.2.png\" alt=\"\"></div> <div class=\"q3_street_text\">Выберите количество уличных камер   <select id=\"question3\"><option value=\"choice\">-Выбрать-</option><option value=\"nol\">Не знаю, жду рекоомендаций</option><option value=\"odin\">1</option><option value=\"dva\">2</option><option value=\"tri\">3</option><option value=\"chetyre\">4</option><option value=\"pyt\">5</option><option value=\"shest\">6</option><option value=\"sem\">7</option><option value=\"vosem\">8</option><option value=\"devat\">9</option><option value=\"desat\">10</option><<option value=\"eleven\">Более 10-ти</option></select></div></div><hr><div class=\"q3_street\"><div class=\"q3_street_img\"><img src=\"img/q3.1.png\" alt=\"\"></div> <div class=\"q3_street_text\">Выберите количество внутренних  камер <select id=\"question3\"><option value=\"choice\">-Выбрать-</option><option value=\"nol\">Не знаю, жду рекоомендаций</option><option value=\"odin\">1</option><option value=\"dva\">2</option><option value=\"tri\">3</option><option value=\"chetyre\">4</option><option value=\"pyt\">5</option><option value=\"shest\">6</option><option value=\"sem\">7</option><option value=\"vosem\">8</option><option value=\"devat\">9</option><option value=\"desat\">10</option><<option value=\"eleven\">Более 10-ти</option></select></div></div></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question2','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question4','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML = "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q1.1.png\" alt=\"\"> </div><div class=\"right_text\"><hr>Внутренние видеокамеры используются в отапливаемых помещениях. Для неотапливаемых помещений лучше использовать оборудование уличного исполнения. Дело здесь на только в температурном режиме, но и их влагозащите, поскольку в условиях перепада температур велика вероятность образования конденсата. Поэтому повышенная степень влагозащиты лишней не будет.</div></div>";
            break;
        case 'question4':
            if (direction == 'forward') { }
            q_title.innerHTML = "Сколько хранить запись с камер?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:40%\"></div></div></div><div class=\"textRow2\">4-ый вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  1-2 недели</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  3-4 недели</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  5-6 недель</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Не знаю. Нужна консультация.</div></div></label></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question3','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question5','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML =  "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q4.png\" alt=\"\"> </div><div class=\"right_text\"><hr>Основным устройством хранения записей для простых систем видеонаблюдения является жесткий диск (HDD). Его емкость определяет время хранения архива. </br> Точное значение рассчитать невозможно, так как зависит от многих факторов: разрешения видеокамеры, яркости, количества движений и т.д.</div></div>";
            break;
        case 'question5':
            if (direction == 'forward') { }
            q_title.innerHTML = "Какие есть специфические задачи?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:50%\"></div></div></div><div class=\"textRow2\">5-ый вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q5\"><div class=\"text-q5\">Можно выбрать несколько вариантов</div><label><div class=\"radio2\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Запись звука</div></label><label><div class=\"radio2\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Распознавание лиц</div></label><label><div class=\"radio2\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Распознавание автомобильных номеров</div></label><label><div class=\"radio2\"><input type=\"checkbox\" id=\"check_q5\" name=\"check-q5\" value=\"check-q5\">  Удаленный доступ</div></label></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question4','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question6','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML =  "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q1.1.png\" alt=\"\"> </div><div class=\"right_text\"><hr>В зависимости от необходимых функций будет подобрано соответствующее оборудование.</div></div>";
            break;
        case 'question6':
            if (direction == 'forward') { }
            q_title.innerHTML = "Вам важнее цена или качество?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:60%\"></div></div></div><div class=\"textRow2\">6-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"low\" id=\"q6\">  Важно сделать как можно дешевле</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"normal\" id=\"q6\">  Нужно сделать хорошо, но за оптимальную цену</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"high\" id=\"q6\">  Качество важнее, чем цена</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"hz\"id=\"q6\">  Не знаю. Нужна консультация.</div></div></label></div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question5','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question7','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML =  "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q26.png\" alt=\"\"> </div><div class=\"right_text\"><hr></div></div>";
            break;
        case 'question7':
            if (direction == 'forward') { q6 = document.getElementById('q6').value} 
            q_title.innerHTML = "Где находится объект?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:70%\"></div></div></div><div class=\"textRow2\">7-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  В пределах КАД</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  До 50-ти км от КАД</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Более 50-ти км от КАД</div></div></label> </div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question6','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question8','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML =  "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q1.1.png\" alt=\"\"> </div><div class=\"right_text\"><hr>Понимание местоположения объекта позволит сразу учесть транспортные расходы в коммерческом предложении, тем самым повысив его точность.</div></div>";
            break;
        case 'question8':
            if (direction == 'forward') { }
            q_title.innerHTML = "Как срочно вам нужна система?";
            q_progress_bar.innerHTML = '<div class=\"row2\"><div class=\"w3-light-grey\"><div class=\"w3-container w3-green w3-center\" style=\"width:80%\"></div></div></div><div class=\"textRow2\">8-ой вопрос из 9</div>';
            q_main_content.innerHTML = "<div class=\"q4\"><label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Как можно быстрее</div></div></label>  <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Через 2-3 недели</div></div></label> <label><div class=\"radio2\"><div class=\"q4-radio1\"></div><div class=\"text-radio2\"><input type=\"radio\" class=\"option-input radio\" name=\"example\" value=\"time\">  Пока просто проверяю цены</div></div></label> </div>";
            q_button.innerHTML = "<div class=\"button-q4\"><button onclick=\"next('question7','back'); \" class=\"input-btn\">Назад</button>   <button onclick=\"next('question9','forward'); \" class=\"input-btn\">Далее</button></div>";
            q_additional_content.innerHTML =  "<div class=\"quiz1right\" id=\"q_additional_content\"><div class=\"right_img\"><img src=\"img/q8.png\" alt=\"\"> </div><div class=\"right_text\"><hr></div></div>";
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

function calculate() {

   
    switch (q6) {

    case "low":
    nameCam = "HN-D2710IR (2.8) 2MP HUNTER";
    cena = 2030;
    break;

    case "normal":
    nameCam = "HN-VD323IR (2.8)  2MP HUNTER";
    cena = 2900;
    break; 

    case "high":
    cena6 = 2200;
    nameCam2 = "HN-B0330IR (3.6) MHD 3MP HUNTER";
    break;

    case "hz":
    cena6 = 2200;
    nameCam2 = "HN-B0330IR (3.6) MHD 3MP HUNTER";
    break;

    default:
    cena = 0;
    nameCam = "";
    break;
   }
   kolichestvo5  = document.getElementById('kolichestvo5').value;
     switch (kolichestvo5) {
       case "nol":
         cena5 = 0;
         break;
        case "odin":
         cena5 = 1;
         break;
       case "dva":
         cena5 = 2;
         break;  
       case "tri":
         cena5 = 3;
         break;
       case "chetyre":
         cena5 = 4;
         break; 
       case "pyt":
         cena5 = 5;
         break; 
       case "shest":
         cena5 = 6;
         break; 
       case "sem":
         cena5 = 7;
         break; 
       case "vosem":
         cena5 = 8;
         break; 
     case "devat":
         cena5 = 9;
         break; 
     case "desat":
         cena5 = 10;
         break; 
      default:
         cena5 = 0;
         break;
   }
    kolichestvo6  = document.getElementById('kolichestvo6').value;
     switch (kolichestvo6) {
      case "nol":
         cena6 = 0;
         nameCam2 = "";
         break;
     case "tri":
         cena6 = 2200;
         nameCam2 = "HN-B0330IR (3.6) MHD 3MP HUNTER";
         break;
     case "chetyre":
         cena6 = 3500;
         nameCam2 = "HN-B0330VFIRH-60 (2.8-12) MHD 3MP HUNTER";
         break; 
     case "pyt":
         cena6 = 2800;
         nameCam2 = "HN-B4624IR (3.6) AHD 4MP HUNTER";
         break; 
     case "devat":
         cena6 = 4290;
         nameCam2 = "DS-2CE16D8T-ITE HDTVI 2MP HIKVISION";
         break; 
     case "desat":
         cena6 = 7990;
         nameCam2 = "DS-2CE16D8T-IT3ZE (2.8-12) HDTVI 2MP HIKVISION";
         break; 
      default:
         cena6 = 0;
         nameCam2 = "";
         break;
     }
     kolichestvo8  = document.getElementById('kolichestvo8').value;
     switch (kolichestvo8) {
       case "nol":
         cena8 = 0;
         break;
        case "odin":
         cena8 = 1;
         break;   
       case "dva":
         cena8 = 2;
         break;  
       case "tri":
         cena8 = 3;
         break;
       case "chetyre":
         cena8 = 4;
         break; 
       case "pyt":
         cena8 = 5;
         break; 
       case "shest":
         cena8 = 6;
         break; 
       case "sem":
         cena8 = 7;
         break; 
       case "vosem":
         cena8 = 8;
         break; 
     case "devat":
         cena8 = 9;
         break; 
     case "desat":
         cena8 = 10;
         break; 
      default:
         cena8 = 0;
         break;
   }
   kolichestvo2  = document.getElementById('kolichestvo2').value;
     switch (kolichestvo2) {
       case "nol":
         cena2 = 0;
         nameReg = "";
         break;
        case "odin":
         cena2 = 4650;
         nameReg = "HNVR-4480HL MHD HUNTER";
         break;   
       case "dva":
         cena2 = 5960;
         nameReg = "HNVR-8420HL MHD HUNTER";
         break;  
       case "tri":
         cena2 = 4910;
         nameReg = "HNVR-8120R V3 MHD HUNTER";
         break;
       case "chetyre":
         cena2 = 3900;
         nameReg = "HNVR-4120R MHD HUNTER";
         break; 
       case "pyt":
         cena2 = 8590;
         nameReg = "DS-7204HQHI-K1 HD-TVI HIKVISION";
         break; 
       case "shest":
         cena2 = 18990;
         nameReg = "DS-7208HQHI-K2/P HD-TVI HIKVISION";
         break; 
      default:
         cena2 = 0;
         nameReg = "";
         break;
   }
   kolichestvo3  = document.getElementById('kolichestvo3').value;
   
   kolichestvo4  = document.getElementById('kolichestvo4').value;
   switch (kolichestvo4) {
      case "nol":
         cena4 = 0;
         nameDisk = "";
         break;
      case "odin":
         cena4 = 3800;
         nameDisk = "Жесткий диск 1 Тб";
         break;   
       case "dva":
         cena4 = 5300;
         nameDisk = "Жесткий диск 2 Тб";
         break;  
   case "tri":
         cena4 = 8500;
         nameDisk = "Жесткий диск 4 Тб";
         break;
      default:
         cena4 = 0;
         nameDisk = "";
         break;
   }
   kolichestvo7  = document.getElementById('kolichestvo7').value;
   switch (kolichestvo7) {
       case "nol":
         cena7 = 0;
         nameMicro = "";
         break;
      case "da":
         cena7 = 1000;
         nameMicro = "";
         break;
      case "net":
         cena7 = 0;
         nameMicro = "";
         break;   
      default:
         cena7 = 0;
         nameMicro = "";
         break;
   }

   stoimost1 = cena*cena5+cena6*cena8+cena2+kolichestvo3*60+cena4+cena7;
   stoimost2 = cena5*1500+cena8*2000+2000+2000+kolichestvo3*2*60;
   stoimost3 = stoimost1  + stoimost2;
   document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost3 +" р.";
   showButton("test1");
   //document.cookie = "sumSvet="+stoimost;
   /*}
   function smeta(name) {
       var matches = document.cookie.match(new RegExp(
       "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
     ));	
       sum = decodeURIComponent(matches[1]); 
       matches ? 11 : alert("корзина пуста");*/
       t0 = "<table>";
       t1 = "<tr><td> <strong> НАИМЕНОВАНИЕ ОБОРУДОВАНИЯ </strong> </td>" + "<td> <strong> МОДЕЛЬ </strong> </td>" + "<td> <strong> КОЛИЧЕСТВО </strong> </td>" + "<td> <strong> ЦЕНА </strong> </td>" + "<td> <strong> СТОИМОСТЬ </strong> </td>";
       if (cena*cena5!=0){ t2 = "<tr><td>Видеокамера внутренняя</td>"+"<td>" + nameCam + "</td>" + "<td>"+ cena5 + "</td>" + "<td>" + cena + "</td>" + "<td>" + cena*cena5 + " р.</td></tr>";}else {t2=""};
       if (cena6*cena8!=0){ t3 = "<tr><td>Видеокамера уличная</td>"+"<td>" + nameCam2 + "</td>" +"<td>"+ cena8 + "</td>" + "<td>" + cena6 + "</td>" + "<td>" + cena6*cena8 + " р.</td></tr>";}else {t3=""};
       t4 = "<tr><td>Видеорегистратор </td>" + "<td>" + nameReg + "</td>" + "<td> 1 </td>" + "<td>" + cena2 + "</td>" + "<td>" + cena2 + " р.</td></tr>";
       t5 = "<tr><td>Жесткий диск </td>" + "<td>" + nameDisk +"</td>" + "<td> 1 </td>"  + "<td>" + cena4 + "</td>" + "<td>" + cena4 + " р.</td></tr>";
       t6 = "<tr><td>Микрофон </td>" + "<td>" + nameMicro +"</td>" + "<td> 1 </td>" + "<td>" + cena7 + "</td>" + "<td>" + cena7 + " р.</td></tr>";
       t7 = "<tr><td>Разъемы </td>" + "<td> BNC разъем </td>" + "<td>" + (cena5 +cena8)*2 + "</td>" + "<td> 20 руб/шт. </td>" + "<td>" + (cena5 +cena8)*2*20 + " р.</td></tr>";
       t8 = "<tr><td>Разъемы </td>" + "<td> Штекер питания </td>" + "<td>" + (cena5 +cena8) + "</td>" + "<td> 20 руб/шт. </td>" + "<td>" + (cena5 +cena8)*20 + " р.</td></tr>";
       t9 = "<tr><td>Кaбель </td>" + "<td> Кабель питания </td>" + "<td>" + kolichestvo3 + "</td>" + "<td> 30 руб/м. </td>" + "<td>" + kolichestvo3*30 + " р.</td></tr>";
       t10 = "<tr><td>Кaбель </td>" + "<td> Кабель сигнальный </td>" + "<td>" + kolichestvo3 + "</td>" + "<td> 30 руб/м. </td>" + "<td>" + kolichestvo3*30 + " р.</td>";
       t11 = "</tr><tr><td>Стоимость оборудования итог </td>" + "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>" +"<td>"+ stoimost1 +" р.</td></tr>";
       t12 = "<tr><td> <strong> НАИМЕНОВАНИЕ РАБОТ </strong> </td>" +  "<td> <strong> ПРИМЕЧАНИЕ </strong> </td>" + "<td> <strong> КОЛИЧЕСТВО </strong> </td>" + "<td> <strong> ЦЕНА </strong> </td>" + "<td> <strong> СТОИМОСТЬ </strong> </td>";
       if (cena*cena5!=0){ t13 = "<tr><td>Установка и настройка видеокамеры</td>"+"<td> Внутренней до 3-х метров </td>" + "<td>" + cena5 + "</td>" + "<td> 1500 руб/шт. </td>" + "<td>" + cena5*1500 + " р.</td></tr>";}else {t13=""};
       if (cena6*cena8!=0){ t14 = "<tr><td>Установка и настройка видеокамеры</td>"+"<td> Уличной до 3-х метров </td>" + "<td>"  + cena8 + "</td>" + "<td> 2000 руб/шт. </td>" + "<td>" + cena8*2000 + " р.</td></tr>";}else {t14=""};
       t15 = "<tr><td>Установка и настройка видеорегистратора</td>" + "<td>  </td>" + "<td> 1 </td>" + "<td> 2000 руб/шт. </td>" + "<td> 2000 р.</td></tr>";
       t16 = "<tr><td>Настройка удаленного доступа</td>" + "<td>  </td>" + "<td> 1 </td>" + "<td> 2000 руб/шт. </td>" + "<td> 2000 р.</td></tr>";
       t17 = "<tr><td>Прокладка кабеля</td>" + "<td>  </td>" + "<td>" + kolichestvo3*2 + " м." + "</td>" + "<td> 60 руб/м. </td>" + "<td>" + kolichestvo3*2*60 + "</td></tr>";
       t18 = "<tr><td> Стоимость работ итог </td>"+"<td>"+ "<td>"+"</td>" +"</td>"+"<td>"+"</td>" +"<td>"+ stoimost2 +" р.</td></tr>";
       t19 = "<tr><td> <strong> Общая стоимость по смете </strong> </td>" + "<td>" + "</td>" + "<td>"+"</td>"+"<td>" +"</td>"+ "<td>" + "<strong>"  + stoimost3 +" р. </strong> </td></tr>";
       t20 = "</table>";
       document.getElementById('sum').innerHTML = t0 + t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14 + t15 + t16 + t17 + t18 + t19 +t20;
       window.estimate = "&estimate="+t0 + t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14 + t15 + t16 + t17 + t18 + t19 +t20;
       showButton("button2");
   //	document.getElementById('sum1').innerHTML = "<tr><td>Видеорегистратор: </td>"+"<td>" + nameReg +"</td>" +"<td>"+ " цена:"+" </td>"+"<td>" + cena2 + " р.</td></tr>";
   //	document.getElementById('sum2').innerHTML = "<tr><td>Кaбель: </td>"+ "<td>" + kolichestvo3 *60 +" р.</td></tr>";
   //	document.getElementById('sum3').innerHTML = "<tr><td>Стоимость итог: </td>" +"<td>"+ sum +" р.</td></tr></table>";
   }