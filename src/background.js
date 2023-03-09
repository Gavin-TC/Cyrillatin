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
    "ц", "я", "э", "ш", "щ", "ж", "х", "ё", "ч", "ю", "й",
    "у", "к", "н", "г", "ф", "в", "а", "п", "р", "о", "л", "д", "з", "е", "с", "м", "и", "т", "б", "ы"
];
var cyrillic_upper = [
    "Ц", "Я", "Э", "Ш", "Щ", "Ж", "Х", "Ё", "Ч", "Ю", "Й",
    "У", "К", "Н", "Г", "Ф", "В", "А", "П", "Р", "О", "Л", "Д", "З", "Е", "С", "М", "И", "Т", "Б", "Ы"
];


var phonics = [
    "ts", "ya", "ee", "sh", "sha", "zh", "kh", "yo", "ch", "yu", "y'",
    "u", "k", "n", "g", "f", "v", "a", "p", "r", "o", "l", "d", "z", "e", "s", "m", "yi", "t", "b", "i"
];
var phonics_upper = [
    "TS", "YA", "EE", "SH", "SHA", "ZH", "KH", "YO", "CH", "YU", "Y'",
    "U", "K", "N", "G", "F", "V", "A", "P", "R", "O", "L", "D", "Z", "E", "S", "M", "YI", "T", "B", "I"
]

// double phonic: ya, ts, ye, sh, sha, zh, kh, yo, ch, yu, y'
// single phonic: u, k, n, g, f, v, a, p, r, o, l, d, z, e, s, m, i, t, b, k, y


function convertCyrillic(tab, selected_text) {
    original_text = selected_text;

    for (let i = 0; i < selected_text.length; i++) { // check every character inside of the selected_text
        for (let j = 0; j < phonics.length; j++) { // check if the current character contains an item from the phonics array, lowercase first
            console.log(j);
            if (selected_text.includes(phonics[j])) { // replace the character that matches the corresponding phonic with the corresponding cyrillic character
                selected_text = selected_text.replace(phonics[j], cyrillic[j]);
                j = -1;
            }
            if(selected_text.includes(phonics_upper[j])) {
                selected_text = selected_text.replace(phonics_upper[j], cyrillic_upper[j]);
                j = -1;
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
            if (selected_text.includes(cyrillic[j])) { // replace the character that matches the corresponding phonic with the corresponding cyrillic character
                selected_text = selected_text.replace(cyrillic[j], phonics[j]);
                j = -1;
            }
            if(selected_text.includes(cyrillic_upper[j])) {
                selected_text = selected_text.replace(cyrillic_upper[j], phonics_upper[j]);
                j = -1;
            }
        }
    }

    converted_text = selected_text;
    chrome.tabs.sendMessage(tab.id, { type: 'replaceSelection', text: converted_text });
}
