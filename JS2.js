alert(Date())

function getDate(){              
        var date = new Date();             
        var date1 = date.toLocaleString();
        var div1 = document.getElementById("times");
        div1.innerHTML = date1;
            }

setInterval("getDate()",1000);

function image(){
        document.getElementById("img1").src='https://i.kym-cdn.com/entries/icons/mobile/000/020/147/drake.jpg';

}

function change(){
        var text_change = document.getElementById('paragraph_change');
        text_change.innerHTML = 'See, the text has changed!';
}

function keyboard(){
        alert('Ohhhhhhhhhhhhhhhhhhhhhh!');
}

function parachange(){
        var select = document.getElementById('paragraph_change1');
                select.style.backgroundColor = 'blue';
                select.style.textAlign = 'center';
                select.style.fontFamily = 'Arial';
}

function temp(f){
        return(f-32)*5/9;
}

function temp_change(){
        var select = document.getElementById('temp');
        select.innerHTML = temp(20);
}

function calc(){
        var a = parseFloat(prompt('number 1'));
        var b = parseFloat(prompt('number 2'));
        alert(a+b);
}

function greet(){
        var GN = prompt('First Name:');
        var FM = prompt('Family Name:');
        alert('Nice to meet you '+ GN + ' ' + FM);
}