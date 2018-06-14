// Code goes here
'use strict';
//Вешаем обработчик на форму
document.getElementById('form1').addEventListener('submit', getInputVal);

function getInputVal(event) {
  let msg = document.getElementById('input1').value;
  return modifyValToUrl(msg);
}

function httpGet(url, arrStr) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    //alert (arrStr);
    let urlStr = `${url}${arrStr}`;

    xhr.open('GET', urlStr, true);
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
      reject(new Error('Network Error'));
    };
    xhr.send();
  });
}

function modifyValToUrl(msg) {
  let arr = msg.split(' ');
  let arrExt = arr.map(function(i) {
    return i;
  });
  var arrStr = arrExt.join('?');

  httpGet(
    'https://www.omdbapi.com/?apikey=adac724d&t=',
    `${arrStr}&plot=full
`
  )
    .then(response => {
      let filmObj = JSON.parse(response);
      return filmObj;
    })
    .then(filmObj => {
      let parent = document.getElementById('film-content');
      //ПРОВЕРКА - Если ошибка в вводе , то отобразить ошибку
      if (filmObj.Title === 'undefined' || filmObj.Title === undefined) {
        let div = document.createElement('div');
        div.setAttribute('id', 'filmContent');

        div.innerHTML = `
      	    <div class="filmContent filmContent-error">
      	    Некорректный ввод названия фильма! Х `;

        parent.appendChild(div);

        let filmContentErr = document.getElementById('filmContent');

        //Уничтожение окна с ошибкой по клику
        filmContentErr.addEventListener('click', function() {
          parent.removeChild(filmContentErr);
        });
        //Уничтожение окна с ошибкой по таймеру
        setTimeout(function() {
          parent.removeChild(filmContentErr);
        }, 2000);
      }

      //Иначе добавить фильм на страницу.
      else {
        let div = document.createElement('div');

        div.setAttribute('id', 'filmContent');

        div.innerHTML = `
      	<div class="film film__img" id ="innerFilm">
      	<div class="container">
      	  <div class="row">
            <div class="col">
            <img class = "main main-img" src = ${filmObj.Poster}> <br>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Title: <strong> ${filmObj.Title} (${filmObj.Year})</strong><br> 
              Director: <strong> ${filmObj.Director}</strong><br>
              ImdbRating: <strong> ${filmObj.imdbRating}</strong><br>
              Metascore: <strong> ${filmObj.Metascore}</strong><br>
              Country: ${filmObj.Country}<br>
              Genre: ${filmObj.Genre}<br>
              Released: ${filmObj.Released}<br>
              Plot: ${filmObj.Plot}<br>
              </div>
            </div>
          </div>
        </div>
      </div>`;

        //Выводим найденный фильм
        parent.appendChild(div);

        //Рендерим фильм
        let filmContent = document.getElementById('filmContent');
        if (filmContent) {
          document
            .getElementById('form1')
            .addEventListener('submit', function(event) {
              parent.removeChild(filmContent);
            });
        }
      }
      return saveFilm(filmObj);
    });
}


