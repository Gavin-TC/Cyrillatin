converted_text = "";


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    converted_text = message.text.toString();

    if (message.type === 'replaceSelection') {
        var selection = document.getSelection().toLocaleString();
        replace_text(selection, converted_text);
    }
});


function replace_text(text_to_replace, replacement_text) {
    const textarea = document.querySelector('textarea');
    textarea.value = textarea.value.replace(text_to_replace, replacement_text);
}
