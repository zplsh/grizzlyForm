  //повесить обработчик на форму, если данные есть, то сохранять в localstorage, иначе не сохранять. 
  // Сохранять только уникальные фильмы. Если название просматриваемого фильма уже записано в localStorage, то отображать фильм из localStorage без повторной записи.
  //1. Проверять название фильма на undefined. Если название === undefined, то не продолжать
  //2. Проверять название фильма на наличие в localStorag. Если название === localStorage['filmObj.Title']
  //3. Если обе проверки пройдены, то создавать новую запись в Local storage, выводить первым в списке истории (insertBefore пустым дивом)
  //4.  
   
   'use strict'
    function saveFilm(filmObj){
        if (filmObj.Title != undefined && filmObj.Title != 'undefined'){
            let date = new Date();
           filmObj.dateNow = date;
            let serialObj = JSON.stringify(filmObj);
            localStorage.setItem(filmObj.Title, serialObj);    
}}

    function showHist(){
        for (let i in localStorage){
                let returnObj = JSON.parse(localStorage.getItem(i))
                let div = document.createElement('div');
                
        div.setAttribute("id", "history-container")
        div.setAttribute('class', 'row')
        div.innerHTML = `
            <div class = "col">
                <div class="history-main-container">${returnObj.Title} ${returnObj.Year} (${returnObj.dateNow})</div>
            </div>`;
        let firstHistContainer = document.getElementById('history-main-container');
        firstHistContainer.appendChild(div);
        
        }
    }

    
        document
        .getElementById('form2')
        .addEventListener('submit', clearStorage);

        function clearStorage(event){
            let conf = confirm('Удалить историю?');
            if (conf){
                return localStorage.clear()
            }else{alert('Не удаляем')};
        }
    

    showHist();
