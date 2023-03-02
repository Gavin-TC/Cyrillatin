console.log("background.js loaded");

chrome.contextMenus.create({
    title: "Convert to Cyrillic",
    id: "convertToCyrillic",
    contexts: ['selection'],
});

chrome.contextMenus.create({
    title:"Convert to Latin alphabet",
    id: "convertToLatin",
    contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === 'convertToCyrillic') {
      convertCyrillic(info.selectionText);
    }

    if (info.menuItemId === 'convertToLatin') {
        convertLatin(info.selectionText);
    }
});

// LOWER: й ц у к е н г ш щ з х ъ ф ы в а п р о л д ж э я ч с м и т ь б ю
// UPPER: Й Ц У К Е Н Г Ш Щ З Х Ъ Ф Ы В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю

var cyrillic = [
    "я", "ц", "у", "к", "е", "н", "г", "ш", "щ",
    "ж", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о",
    "л", "д", "з", "э", "й", "ч", "с", "м", "и", "т",
    "ь", "б", "ю"
]

var phonics = [
    "ya", "ts", "u", "k", "ye", "n", "g", "sh", "sha",
    "zh", "kh", '"', "f", "y'", "v", "a", "p", "r","o",
    "l", "d", "z", "e", "y", "ch", "s", "m", "i", "t",
    "'", "b", "yu"
];


function convertCyrillic(selected_text) {
    for (let i = 0; i < selected_text.length; i++) {
        for (let k = 0; k < phonics.length; k++) {
            if (selected_text.includes(phonics[k])) {
                selected_text = selected_text.replace(phonics[k], cyrillic[k]);
            }
        }
    }
    
    console.log(selected_text);
    copy_to_clipboard(selected_text);
}

function convertLatin(selected_text) {
    for (let i = 0; i < selected_text.length; i++) {
        for (let k = 0; k < cyrillic.length; k++) {
            if (selected_text.includes(cyrillic[k])) {
                selected_text = selected_text.replace(cyrillic[k], phonics[k]);
            }
        }
    }

    console.log(selected_text);
    copy_to_clipboard(selected_text);
}

function copy_to_clipboard(text) {
    
}