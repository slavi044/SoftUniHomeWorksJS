function solve() {
  let text = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let resultStr = 'Result: ';

  let camelCase = function(words) {
    words = words.split(' ');
    words[0] = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join('');
  }
  let pascalCase = function(words) {
    words = words.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join('');
  }
  
  if (type === 'Camel Case') {
    resultStr = camelCase(text);

  } else if (type === 'Pascal Case') {
    resultStr = pascalCase(text);

  } else {
    resultStr = 'Error!'
  }

  result.textContent = resultStr;
}