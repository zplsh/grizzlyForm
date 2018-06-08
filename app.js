
// Code goes here
'use strict'
//Вешаем обработчик на форму
document.getElementById('form1').addEventListener('submit', getInputVal)



function getInputVal(event) {
  let msg = document.getElementById('input1').value;

  return modifyValToUrl(msg)
}




function httpGet(url, arrStr) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    //alert (arrStr);
    let urlStr = `${url}${arrStr}`


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
      reject(new Error("Network Error"));
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


  httpGet('https://www.omdbapi.com/?apikey=adac724d&t=', `${arrStr}&plot=full
`)
    .then(response => {
      let filmObj = JSON.parse(response);
      return filmObj;

    })
    .then(filmObj => {
      
      //ПРОВЕРКА - Если ошибка в вводе , то отобразить ошибку
      if (filmObj.Title === 'undefined' || filmObj.Title === undefined) {
        
        let div = document.createElement('div');
            div.setAttribute("id", "filmContent")
            
            div.innerHTML = `
      	    <div class="filmContent filmContent-error">
      	    Некорректный ввод названия фильма! Х `
            document.body.appendChild(div);
            
            let filmContentErr = document.getElementById('filmContent')
            console.log(filmContentErr);
        //Уничтожение окна с ошибкой по клику
        filmContentErr.addEventListener('click', function(){
            document.body.removeChild(filmContentErr)
        })
         //Уничтожение окна с ошибкой по таймеру
        setTimeout(function(){ 
            document.body.removeChild(filmContentErr);
        }, 2000);
      } 
       
     
      //Иначе добавить фильм на страницу.  
     else {
        let div = document.createElement('div');
        div.setAttribute("id", "filmContent")
        
        div.innerHTML = `
      	<div class="film film__img" id ="innerFilm">
          <img class = "main main-img" src = ${filmObj.Poster}> <br>
          Title: <strong> ${filmObj.Title}</strong><br> 
          Year: ${filmObj.Year}<br>
          Country: ${filmObj.Country}<br>
          Genre: ${filmObj.Genre}<br>
          Released: ${filmObj.Released}<br>
          Plot: ${filmObj.Plot}<br>
          </div>
          </div>`;

        document.body.appendChild(div);
        let filmContent = document.getElementById('filmContent');
        return filmContent ;
      }
    })
    .then(filmContent  => {
      if (filmContent) {
        document.getElementById('form1').addEventListener('submit', function(event) {
          document.body.removeChild(filmContent);
        });
      }
    })


}



