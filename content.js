converted_text = "";


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    converted_text = message.text.toString();

    if (message.type === 'replaceSelection') {
        var selection = document.getSelection().toLocaleString();
        replace_text(selection, converted_text);
    }
});


function replace_text(text_to_replace, replacement_text) {
<<<<<<< Updated upstream
    const textarea = document.querySelector('textarea');
    textarea.value = textarea.value.replace(text_to_replace, replacement_text);
=======
    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
    console.log(document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a').forEach);

    for (let i = 0; i < text.length; i++) {

      console.log(text[i].innerHTML.includes('ponyal'));

      if (text[i].innerHTML.includes('ponyal')) {
        text[i].innerHTML = text[i].innerHTML.replace(text_to_replace, replacement_text);

      } else {
        console.log("this returned false");
        return false;

      }
    }
>>>>>>> Stashed changes
}
