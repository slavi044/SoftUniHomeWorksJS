function solve() {
  let input = document.getElementById('input').value.split('.');
  let output = document.getElementById('output');
  input.pop();

  let outputArr = [];

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i] + '.';    
  }

  while (input.length > 0) {
    if (input.length >= 3) {
      let str = input.shift() + input.shift() + input.shift();
      outputArr.push(str);

    }else if (input.length == 2) {
      let str = input.shift() + input.shift();
      outputArr.push(str);

    } else if (input.length == 1) {
      outputArr.push(input.shift());

    }
  }

  for (let i = 0; i < outputArr.length; i++) {
    let p = document.createElement('p');
    p.innerHTML = outputArr[i];
    output.appendChild(p);
    
  }

  console.log(outputArr);
}