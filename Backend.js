var wordListDB = [
        {
            word: "alpha",
            phoneticSign: "|ӕlfə",
            example: "The top class is called Alpha-Plus",
            meaning: "[NOUN] the first letter in the Greek alphabet (Α, α), a vowel transliterated as a",
            lastViewTime: "2017-03-11T06:00:56.638Z",
            lastKnowingTime: "2017-03-11T06:00:56.638Z",
            knowingCount: 0
        },
        {
            word: "beta",
            phoneticSign: "|beɪtə",
            example: "Thank you for trying out the BETA.",
            meaning: "[NOUN] the second letter in the Greek alphabet (Β, β), a consonant, transliterated as b",
            lastViewTime: "2017-03-11T06:00:56.638Z",
            lastKnowingTime: "2017-03-11T06:00:56.638Z",
            knowingCount: 0
        },
        {
            word: "gamma",
            phoneticSign: "|gӕmə",
            example: "A study on the measurement of void fraction using gamma ray",
            meaning: "[NOUN] Gamma is the third letter of the Greek alphabet.",
            lastViewTime: "2017-03-11T06:00:56.638Z",
            lastKnowingTime: "2017-03-11T06:00:56.638Z",
            knowingCount: 0
        }
    ];

function cloneJSONData(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function getMainWordList() {
    
    // TODO: some fantastic filtering

    return cloneJSONData(wordListDB);
}

function updateWordView(word) {
    wordListDB.every(function(item){
        if (item.word !== word)
            return true;
        
        date = new Date();
        item.lastViewTime = date.toJSON();
        return false;
    });
}

function confirmWordKnowing(word, withoutShowMeaning) {
    wordListDB.every(function(item){
        if (item.word !== word)
            return true;
        
        date = new Date();
        item.lastKnowingTime = date.toJSON();
        item.lastViewTime = date.toJSON();
        if (withoutShowMeaning)
            item.knowingCount = item.knowingCount + 1;
        return false;
    });
}

function addWord(word, phoneticSign, example, meaning) {
    wordListDB.push({
        word: word,
        phoneticSign: phoneticSign,
        example: example,
        meaning: meaning
    });
}

module.exports = {
    getMainWordList: getMainWordList,
    updateWordView: updateWordView,
    confirmWordKnowing: confirmWordKnowing,
    addWord: addWord
}