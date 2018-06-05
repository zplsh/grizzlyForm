
    'use strict';
    let urlModify = {
    listen (){
        document.getElementById('form1').addEventListener('submit', getInputVal)
    },

    getInputVal(event) {
        let msg = document.getElementById('input1').value;
        return modifyValToUrl(msg)
    },

    modifyValToUrl(msg) {
        let arr = msg.split(' ');
        let arrExt = arr.map(function (i) {
            return i;
        });

        let arrStr = arrExt.join('?');
        let mainUrl = 'http://www.omdbapi.com/?apikey=adac724d&t=';
        return `${mainUrl}${arrStr}`

    }
    };
    module.exports = urlModify;