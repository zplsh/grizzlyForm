
'use strict';

function httpGet(url) {

    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}
httpGet("http://www.omdbapi.com/?apikey=adac724d&t=batman")
    .then(response => {
        console.log(response);
        let filmObj = JSON.parse(response);
        return filmObj;
    })
    .then(filmObj => {
        let div = document.createElement('div');
        div.className = 'film';
        div.innerHTML = ` Title: <strong> ${filmObj.Title}</strong> <br> 
        Year: ${filmObj.Year}<br>
        Country: ${filmObj.Country}<br>
        Genre: ${filmObj.Genre} <br>
        Released: ${filmObj.Released} <br>
        Plot: ${filmObj.Plot} <br>
        <img class = "main main-img" src="https://ia.media-imdb.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg">
        `;
        document.body.appendChild(div);

    });





