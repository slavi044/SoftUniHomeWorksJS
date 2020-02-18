function growingWord() {
  let changeButton = document.getElementsByTagName('button')[0];
  let growingWord = document.getElementsByTagName('div')[1].getElementsByTagName('p')[0];

  let colors = {
    '': '#5B88BD',
    blue: '8FF897',
    green: '#A40014',
    red: '#5B88BD'
  };

  growingWord.style.fontSize = newSize();
  growingWord.style.color = newColor();

  function newSize() {
    let size = growingWord.style.fontSize;
    let newSize = '';
    
    if (size === '') {
      newSize = 2;
    } else {
      newSize = size.match(/\d+/gmi);
      newSize *= 2;
    }

    return newSize + 'px';
  }

  function newColor() {
    let currentColor = growingWord.style.color;
    return colors[currentColor];
  }


}