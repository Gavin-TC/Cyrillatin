document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.github-button').addEventListener('click', function() {
        chrome.tabs.create({
            url: "https://github.com/Gavin-TC/Cyrillatin"
        });
    });
});
