
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
});

var Observable = require("FuseJS/Observable");
wordList = Observable(wordListJsonData).expand();
currentPage = Observable(0);

function onConfirmKnowing(sender) {
    wordList.remove(sender.data);
}

module.exports = {
    wordList: wordList,
    currentPage: currentPage,
    onConfirmKnowing: onConfirmKnowing
};