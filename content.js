console.log("content.js is running");
converted_text = "";


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    converted_text = message;

    if (message.type === 'replaceSelection') {
        var selection = document.getSelection().toString();
        console.log(selection);
    }
    // if (message.type === 'replaceSelection') {
    //     converted_text = message;
    //     const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
    //     var selection = document.getSelection().toString();
    //     console.log("text : " + text);
    //     console.log("selection : " + selection);
    //     console.log("converted text : " + converted_text);
    //     // var sel_range = selection.getRangeAt(0);
    //     // sel_range.
    //     // //selection.replace("gavin", converted_text);
    //     // console.log("SELECTION: " + selection);
    // }
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
