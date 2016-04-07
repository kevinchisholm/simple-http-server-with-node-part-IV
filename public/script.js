var div = document.createElement('div'),
text = document.createTextNode('This box was added by my JavaScript file');

div.className="colorBox blueBack";
div.appendChild(text);
document.getElementsByTagName('body')[0].appendChild(div);