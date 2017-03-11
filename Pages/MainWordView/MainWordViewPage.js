var Observable = require("FuseJS/Observable");
var Backend = require("Backend.js");


var wordListJsonData = Backend.getMainWordList();

wordListJsonData.forEach(function(item, idx){
    item.index = idx;
    item.isShowMeaning = Observable(false);
});

wordList = Observable(wordListJsonData).expand();
currentPage = Observable(0);

function onClickMeaningPanel(e) {
    e.data.isShowMeaning.value = true;
}

function onWordPageActivated(arg) {
    currentPage.value = arg.data.index;
}

function onConfirmKnowing(e) {
    // confirm to database
    Backend.confirmWordKnowing(e.data.word, !e.data.isShowMeaning);

    // remove this item from visual word list
    wordList.remove(e.data);
    
    if (currentPage.value > 0) {
        currentPage.value -= 1;
        console.log("currentPage.value="+currentPage.value);
    }
}

module.exports = {
    wordList: wordList,
    currentPage: currentPage,
    onWordPageActivated: onWordPageActivated,
    onConfirmKnowing: onConfirmKnowing,
    onClickMeaningPanel: onClickMeaningPanel
};