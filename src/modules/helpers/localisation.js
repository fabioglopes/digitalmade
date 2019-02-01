// Handlebars Localisation Helper
// Source: https://gist.github.com/tracend/3261055
const Handlebars = require('handlebars/runtime');

Handlebars.registerHelper('localisation', function(keyword) {
    var lang = (navigator.language) ? navigator.language : navigator.userLanguage;

    // pick the right dictionary (if only one available assume it's the right one...)
    var locale = window.locale[lang] || window.locale['en-US'] || window.locale || false;

    // exit now if there's no data
    if( !locale ) return target;

    // loop through all the key hierarchy (if any)
    var target = locale;
    var key = keyword.split(".");
    for (i in key){
        target = target[key[i]];

    }
    // fallback to the original string if nothing found
    target = target || keyword;
    //output
    return target;
});


module.exports = {
    handlebars: Handlebars
};