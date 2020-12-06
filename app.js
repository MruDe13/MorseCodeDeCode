var englishText = document.querySelector("#textEnglish");
var translated_Morse = document.querySelector("#translatedMorse");
var btnMorse = document.querySelector("#toMorse");

var morseText = document.querySelector("#textMorse");
var translated_English = document.querySelector("#translatedEnglish");
var btnEnglish = document.querySelector("#toEnglish");

var Url_1 = "https://api.funtranslations.com/translate/morse.json"

var url_2 = "http://api.funtranslations.com/translate/morse2english.json"

function english2morse(text){
    return Url_1 + "?" + "text=" + text
}

function morse2english(text){
    return url_2 + "?" + "text=" + text
}

function errorhandling(error){
    console.log("Error Occured", error);
    alert("Error Occured: Please try again in some time.")
}

function translate2morse(){
    var text = englishText.value;
    fetch(english2morse(text))
        .then(morse => morse.json())
        .then(json =>{
            var result = json.contents.translated;
            translated_Morse.innerText = result;
        })
        .catch(errorhandling)
}

function translate2english(){
    var text = morseText.value;
    fetch(morse2english(text))
        .then(english => english.json())
        .then(json => {
            var result = json.contents.translated;
            translated_English.innerText = result;
        })
        .catch(errorhandling)
}

btnMorse.addEventListener("click",translate2morse)
btnEnglish.addEventListener("click",translate2english)