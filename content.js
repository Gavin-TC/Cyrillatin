console.log("content.js is running");
converted_text = "";


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    msg = message.text.toString();
    converted_text = msg;
    console.log("CONVERTED TEXT : " + converted_text);
    console.log("MSG TYPE : " + typeof msg);

    if (message.type === 'replaceSelection') {
        var selection = document.getSelection().toString();
        replace_text(selection, converted_text);
        
    }
});


function convert(elem) {
    var content = document.body.innerHTML; // get HTML content for the given element
    var pattern = new RegExp(/hello/gi);
    content = content.replace(pattern,'hi');
    document.getElementById(elem).innerHTML = content; // put the replace content back
}


function replaceTextOnPage(from, to){
    getAllTextNodes().forEach(function(node){
      node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
    });
  
    function getAllTextNodes(){
      var result = [];
  
      (function scanSubTree(node){
        if(node.childNodes.length) 
          for(var i = 0; i < node.childNodes.length; i++) 
            scanSubTree(node.childNodes[i]);
        else if(node.nodeType == Node.TEXT_NODE) 
          result.push(node);
      })(document);
  
      return result;
    }
  
    function quote(str){
      return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
}


function replace_text(text_to_replace, replacement_text) {
    document.body.innerText.replace(text_to_replace, replacement_text);

    console.log("ATTEMPTED REPLACEMENT OF TEXT.");
}
