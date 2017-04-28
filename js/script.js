console.log(document.title); // Комментарий

/*
   Комментарий
*/
var Hi = 'Привет, мир';

alert(Hi);

var MyName = 'Татьяна';
var MyLastName = 'Грудачева';
var Space = ' ';

console.log(MyName + Space + MyLastName);

function click_b(){
    alert("Привет, я - JS");
    return false;
}

function animation(){
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var rightBlock = document.getElementById('rightBlock');
    
    img1.className += "from-left-to-right-go";

    setTimeout(function(){img2.className += ' from-left-to-right-go';}, 200);
    rightBlock.className += " from-left-to-right-go";   
}