var xhr = new XMLHttpRequest();
xhr.open("GET", "https://theimdbapi.org/api/find/movie?title=transformers&year=2007", true);
//xhr.withCredentials = true;
xhr.onload = function Test() {
    this.film  = xhr.responseText;
    this.result =   document.getElementById("result");
    result.innerHTML = this.film;
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
