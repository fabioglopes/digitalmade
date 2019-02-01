import './main.scss';
import 'bootstrap/js/src/modal.js'
import 'bootstrap/js/src/button.js'

Handlebars.registerHelper('reverseWord', function(value){
    var reversedWord = value.split("").reverse().join("");
    return reveredWord;
});