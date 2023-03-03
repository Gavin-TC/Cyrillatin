var input = document.createElement('textarea');
document.body.appendChild(input);
input.value = convertedText;
input.select();
document.execCommand('copy');
input.remove();