/*
(function() {


  'use strict';

  function showPrompt(text) {

    //Вешаем обработчик на элемент h1
    let h1 = document.querySelector('h1');

    //добавляем кнопку для открытия текстового инпута

    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute('class', 'main-btn');
    btn.innerHTML = "Click me!"
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {

      //Добавляем форму
      let newForm = document.createElement('form');
      newForm.setAttribute("onsubmit", "return false");
      document.body.appendChild(newForm);

      //Добмавляем Инпут к форме 

      let newInput = document.createElement('input');
      newInput.setAttribute("type", "text");
      newInput.setAttribute("value", "Type smth...");
      newForm.insertBefore(newInput, null);

      //Добавляем текст к каждому инпуту
      let t = document.createTextNode("New text field");
      //t.classList.add("form__text");
      newForm.insertBefore(t, newInput);



    });

  }

  showPrompt();

})()
*/