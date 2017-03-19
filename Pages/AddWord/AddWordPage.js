var Observable = require("FuseJS/Observable");
var Timer = require("FuseJS/Timer");
var Backend = require("Backend.js");

var newWord = Observable("");

var showSearchResults = Observable(false);
var searchResults = Observable();

searchTimerID = -1;
function onSearchBoxChanged() {
    if (searchTimerID != -1) {
        Timer.delete(searchTimerID);
        searchTimerID = -1;
    }

    if (newWord.value.length > 0) {
        searchTimerID = Timer.create(function() {
            Backend.searchWord(
                // query string
                newWord.value, 
                // onSuccess
                function(results){
                    showSearchResults.value = true;
                    
                    results.forEach(function(item, idx){
                        
                    });

                    searchResults.clear();

                    searchResults.addAll([
                        {
                            word: "apple",
                            meaning: "asdf",
                            phoneticSign: "phonetic",
                            example: "this is example"
                        },
                        {
                            word: "apple",
                            meaning: "asdf",
                            phoneticSign: "phonetic",
                            example: "this is example"
                        },
                        {
                            word: "apple",
                            meaning: "asdf",
                            phoneticSign: "phonetic",
                            example: "this is example"
                        }
                    ]);
                },
                // onFailure
                function(status) {
                    // if failed, show result page with 'empty result' message.
                    showSearchResults.value = true;
                    searchResults = [];
                }
            );
        }, 1000, false);
    }
    else {
        showSearchResults.value = false;
    }
}

function onAddWord(e) {
    // validation check before request to add
    console.log("add word " + e.data.word);
    
    // request to add
    Backend.addWord(e.data.word, e.data.phoneticSign, e.data.example, e.data.meaning);
}

module.exports = {
    newWord: newWord,
    showSearchResults: showSearchResults,
    onSearchBoxChanged: onSearchBoxChanged,
    searchResults: searchResults,
    onAddWord: onAddWord
}