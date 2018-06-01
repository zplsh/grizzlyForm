
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.omdbapi.com/?apikey=adac724d&t=batman", true);
//xhr.withCredentials = true;
xhr.onload = function Test() {
    let film  = xhr.responseText;
    let result =   document.getElementById("result");
    result.innerHTML = film;
};

/*
let test = new Test();
function test(){
	forEach(function(index, film){
    console.log (film.index);
    });
}
*/    
xhr.send();
