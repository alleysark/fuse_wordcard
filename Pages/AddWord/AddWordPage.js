var Observable = require("FuseJS/Observable");
var Timer = require("FuseJS/Timer");
var Backend = require("Backend.js");


var newWord = Observable("");
var newPhoneticSign = Observable("");
var newExample = Observable("");
var newMeaning = Observable("");
var hasResults = Observable(false);

function onClickAddWord() {
    // validation check before request to add
    newWordText = newWord.value.toLowerCase();

    // request to add
    Backend.addWord(newWordText, newPhoneticSign.value, newExample.value, newMeaning.value);
}

searchTimerID = -1;
function onSearchBoxChanged() {
    if (searchTimerID != -1) {
        Timer.delete(searchTimerID);
        searchTimerID = -1;
    }

    if (newWord.value.length > 0) {
        searchTimerID = Timer.create(function() {
            // request naver search
            hasResults.value = true;
        }, 1000, false);
    }
    else {
        hasResults.value = false;
    }
}

module.exports = {
    newWord: newWord,
    newPhoneticSign: newPhoneticSign,
    newExample: newExample,
    newMeaning: newMeaning,
    hasResults: hasResults,
    onClickAddWord: onClickAddWord,
    onSearchBoxChanged: onSearchBoxChanged
}