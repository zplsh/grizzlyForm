
'use strict';

function httpGet(url) {

    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

};


httpGet("http://www.omdbapi.com/?apikey=adac724d&t=batman")
    .then(response => {
        let filmObj = JSON.parse(response);
        return filmObj;
    })

    .then(window.onload = filmObj => {

        let main__form_list1 = document.body.querySelector('main__form-list1');
        //main__form_list1.innerHTML = filmObj.Title;
        //main__form_list1.appendChild(text, filmObj.Title);
        console.log(main__form_list1.innerHTML);

    });
/*




let promise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.omdbapi.com/?apikey=adac724d&t=batman", true);
    //xhr.withCredentials = true;
    xhr.onload = function Test() {
        let film  = xhr.responseText;
        let result =   document.getElementById("result");
        result.innerHTML = film;
    };

    xhr.send();

})

promise.then(
    result => onFulfilled, onRejected)

let test = new Test();
function test(){
	forEach(function(index, film){
    console.log (film.index);
    });
}


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML = this.responseText;
    }
*/
