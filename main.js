
var btn = document.getElementById('btn');
var animalInfo = document.getElementById('animal-info')

btn.addEventListener('click', function(){

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
    xhttp.onload = function(){
    //console.log(xhttp.responseText);
    var data = JSON.parse(xhttp.responseText);
    //console.log(data[0]);
    display(data);
}

xhttp.send();

});

function display(data){
    var str = "";

    for(var i=0; i<data.length; i++){
        str = str + "<p>" + data[i].name + " is a " + data[i].species + ".</p> <hr>";
    }
    animalInfo.insertAdjacentHTML('beforeend', str);
    btn.style.display = 'none';
}

