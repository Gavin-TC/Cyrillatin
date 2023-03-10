document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.donate-button').addEventListener('click', function() {
        chrome.tabs.create({
            url: "https://www.buymeacoffee.com/gavintclonts"
        });
    });
    
    document.querySelector('.github-button').addEventListener('click', function() {
        chrome.tabs.create({
            url: "https://github.com/Gavin-TC/Cyrillatin"
        });
    });
});
