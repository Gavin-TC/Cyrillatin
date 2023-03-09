converted_text = "";


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    converted_text = message.text.toString();

    if (message.type === 'replaceSelection') {
        var selection = document.getSelection().toLocaleString();
        setTimeout(function() {
          replace_text(selection, converted_text);
        }, 500); // delay execution by 0.5 seconds
        
        //replace_text(selection, converted_text);
    }
});


function replace_text(text_to_replace, replacement_text) {
  const editableElements = document.querySelectorAll('textarea, input, [contenteditable="true"]');

  try {
    editableElements.forEach(element => {
      if (element.value && element.value.includes(text_to_replace)) {
        element.value = element.value.replace(text_to_replace, replacement_text);
      } else if (element.textContent && element.textContent.includes(text_to_replace)) {
        element.textContent = element.textContent.replace(text_to_replace, replacement_text);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
