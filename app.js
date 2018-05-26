const server = require(server);
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://theimdbapi.org/api/find/movie?title=transformers&year=2007", true);
xhr.withCredentials = true;
xhr.onload = function Test() {
    let film  = xhr.responseText;
    let result =   document.getElementById("result");
    result.innerHTML = film;
    return;
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
