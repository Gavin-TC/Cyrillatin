chrome.contextMenus.create({
    title: "Convert to Cyrillic",
    id: "convert_cyrillic",
    contexts: ['selection'],
});

chrome.contextMenus.create({
    title: "Convert to Latin phonics",
    id: "convert_latin",
    contexts: ['selection'],
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === 'convert_cyrillic') {
        convertCyrillic(tab, info.selectionText);
    }
    if (info.menuItemId === 'convert_latin') {
        convertLatin(tab, info.selectionText);
    }
});


var cyrillic = [
    "я", "ц", "у", "к", "е", "н", "г", "ш", "щ",
    "ж", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о",
    "л", "д", "з", "э", "й", "ч", "с", "м", "и", "т",
    "ь", "б", "ю", "к"
];
var cyrillic_upper = [
    "Я", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ",
    "Ж", "Х", "Ъ", "Ф", "Ы", "В", "А", "П", "Р", "О",
    "Л", "Д", "З", "Э", "Й", "Ч", "С", "М", "И", "Т",
    "Ь", "Б", "Ю", "К"
];


var phonics = [
    "ya", "ts", "u", "c", "ye", "n", "g", "sh", "sha",
    "zh", "kh", '"', "f", "y'", "v", "a", "p", "r", "o",
    "l", "d", "z", "e", "y", "ch", "s", "m", "i", "t",
    "'", "b", "yu", "k"
];
var phonics_upper = [
    "YA", "TS", "U", "C", "YE", "N", "G", "SH", "SHA",
    "ZH", "KH", '"', "F", "Y'", "V", "A", "P", "R", "O",
    "L", "D", "Z", "E", "Y", "CH", "S", "M", "I", "T",
    "'", "B", "YU", "K"
];


function convertCyrillic(tab, selected_text) {
    original_text = selected_text;

    for (let i = 0; i < selected_text.length; i++) { // check every character inside of the selected_text
        for (let j = 0; j < phonics.length; j++) { // check if the current character contains an item from the phonics array, capitals first
            if(selected_text.includes(phonics_upper[j])) {
                selected_text = selected_text.replace(phonics_upper[j], cyrillic_upper[j]);
            }

            if (selected_text.includes(phonics[j])) { // replace the character that matches the corresponding phonic with the corresponding cyrillic character
                selected_text = selected_text.replace(phonics[j], cyrillic[j]);
            }
        }
    }
    converted_text = selected_text;
    chrome.tabs.sendMessage(tab.id, { type: 'replaceSelection', text: converted_text });
}


function convertLatin(tab, selected_text) {
    original_text = selected_text; 

    for (let i = 0; i < selected_text.length; i++) { // check every character inside of the selected_text
        for (let j = 0; j < cyrillic.length; j++) { // check if the current character contains an item from the cyrillic array
            if(selected_text.includes(cyrillic_upper[j])) {
                selected_text = selected_text.replace(cyrillic_upper[j], phonics_upper[j]);
            }

            if (selected_text.includes(cyrillic[j])) { // replace the character that matches the corresponding phonic with the corresponding cyrillic character
                selected_text = selected_text.replace(cyrillic[j], phonics[j]);
            }
        }
    }

    converted_text = selected_text;
    chrome.tabs.sendMessage(tab.id, { type: 'replaceSelection', text: converted_text });
}
