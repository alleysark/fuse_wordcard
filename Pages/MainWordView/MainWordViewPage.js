var Observable = require("FuseJS/Observable");
var Backend = require("Backend.js");

var wordListJsonData = [
        {
            word: "alpha",
            phoneticSign: "|ӕlfə",
            example: "The top class is called Alpha-Plus",
            meaning: "[NOUN] the first letter in the Greek alphabet (Α, α), a vowel transliterated as a",
            viewCount: 0,
            lastViewTime: "170301-18:32"
        },
        {
            word: "beta",
            phoneticSign: "|beɪtə",
            example: "Thank you for trying out the BETA.",
            meaning: "[NOUN] the second letter in the Greek alphabet (Β, β), a consonant, transliterated as b",
            viewCount: 0,
            lastViewTime: "170301-18:32"
        },
        {
            word: "gamma",
            phoneticSign: "|gӕmə",
            example: "A study on the measurement of void fraction using gamma ray",
            meaning: "[NOUN] Gamma is the third letter of the Greek alphabet.",
            viewCount: 0,
            lastViewTime: "170301-18:32"
        }
    ];
    
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