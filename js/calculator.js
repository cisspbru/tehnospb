window.sendEstimate = false;

function setCookie(){
   document.cookie = 'name1=Вася11';
   alert("set- ok");
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
     return matches ? decodeURIComponent(matches[1]) : undefined;
}

function raschitat() {
 kolichestvo1  = document.getElementById('kolichestvo1').value;
  switch (kolichestvo1) {
   case "nol":
      cena = 0;
      nameCam = "";
      break;
   case "odin":
      cena = 2900;
      nameCam = "HN-VD323IR (2.8) MHD 2MP HUNTER";
      break;  
    case "dva":
      cena = 3620;
      nameCam = "HN-MVD2710IR (3.6) MHD 2MP HUNTER";
      break; 
  case "shest":
      cena = 2500;
      nameCam = "HN-VD4624IR (3.6) AHD 4MP HUNTER";
      break;
  case "sem":
      cena = 4290;
      nameCam = "DS-2CE56D8T-IT1E HDTVI 2MP HIKVISION";
      break;
  case "vosem":
      cena = 4590;
      nameCam = "DS-2CE56D8T-VPITE HDTVI 2MP HIKVISION";
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

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		alert("корзина очищена")
    }
}

function showButton(idName) {
  if(document.getElementById(idName).style.display=='none') {
    document.getElementById(idName).style.display = '';
  } else {
    }
  return false;
}

function hideNav(idName) {    
    document.getElementById(idName).style.display = 'none';  
    disableScroll();
    return false;
}

function showNav(idName) {
    document.getElementById(idName).style.display = '';
    enableScroll()
    return false;
}
function attachEstimate(condition){
    if(condition == 1){
      window.sendEstimate = true;
    }
    if(condition == 0){
        window.sendEstimate = false;
        document.getElementById('clip').style.display='none';
    }
    return false;
    
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		alert("корзина очищена")
    }
    return false;
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

function quiz() {
var1 = document.getElementById('var1').value;
switch (var1) {
  case "nol":
     cena = 0;
     nameCam = "";
     break;
  case "odin":
     cena = 2900;
     nameCam = "HN-VD323IR (2.8) MHD 2MP HUNTER";
     break;  
}
document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost3 +" р.";
showButton("test1");
return false;
}
