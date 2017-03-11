
function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function getMainWordList() {
    console.log("not yet...");
    return [];
}

module.exports = {
    getMainWordList: getMainWordList
}