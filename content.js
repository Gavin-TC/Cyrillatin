converted_text = "";


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'replaceSelection') {

        var selection = document.getSelection().toString();
        var all_elements = document.getRootNode();

        selection.replace(selection, converted_text);

        //selection.replace("gavin", converted_text);
        console.log("SELECTION: " + selection);
        
    }
});


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message != null) {
//         converted_text = message;
//         replace_text("hello", converted_text);
//         sendResponse({message : "Response from content.js"})
//     }
// });


function replace_text(replacement_text, new_text) {
    // replacement_text = new_text
}
