console.log("background.js loaded");

chrome.contextMenus.create({
    title: "Convert to Cyrillic",
    id: "convertToCyrillic",
    contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === 'convertToCyrillic') {
      convertCyrillic(info.selectionText);
    }
});


// LOWER: й ц у к е н г ш щ з х ъ ф ы в а п р о л д ж э я ч с м и т ь б ю
// UPPER: Й Ц У К Е Н Г Ш Щ З Х Ъ Ф Ы В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю

var dict = new Map([
    ["y", "й"],
    ["ts", "ц"],
    ["u", "у"],
    ["k", "к"],
    ["ye", "е"],
    ["n", "н"],
    ["g", "г"],
    ["sh", "ш"],
    ["sha", "щ"],
    ["z", "з"],
    ["kh", "х"],
    ['"', "ъ"],
    ["f", "ф"],
    ["y'", "ы"],
    ["v", "в"],
    ["a", "а"],
    ["p", "п"],
    ["r", "р"],
    ["o", "о"],
    ["l", "л"],
    ["d", "д"],
    ["zh", "ж"],
    ["e", "э"],
    ["ya", "я"],
    ["ch", "ч"],
    ["s", "с"],
    ["m", "м"],
    ["yi", "и"],
    ["t", "т"],
    ["'", "ь"],
    ["b", "б"],
    ["yu", "ю"]
]);

// var dict_lower = {
//     "": ""
// };


function convertCyrillic(selected_text) {
    console.log("you selected \"" + selected_text + "\"");

    let text = "";

    

}

