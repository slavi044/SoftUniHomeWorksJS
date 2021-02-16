function solve() {
  let table = document.getElementsByClassName('table')[0];
  let input = document.getElementsByTagName('textarea')[0];
  let output = document.getElementsByTagName('textarea')[1];
  let generateBtn = document.getElementsByTagName('button')[0];
  let buyBtn = document.getElementsByTagName('button')[1];
  
  generateBtn.addEventListener('click', () => {
    let furnitureInfo = JSON.parse(input.value);

    for (let i = 0; i < furnitureInfo.length; i++) {
      let entity = furnitureInfo[i];
      let tr = create(entity);

      table.appendChild(tr);
      //input.value = '';
    }
  });

  buyBtn.addEventListener('click', () => {
    let furniture = table.children;
    let markedFurniture = [];
    let totalPrice = 0;
    let averageDecFactor = 0;
    let countOfFurniture = 0;

    for (let i = 2; i < furniture.length; i++) {
      let isSelected = furniture[i].children[0].children[4].children[0].checked;
      
      if (isSelected) {
        countOfFurniture++;
        let furnitureName = furniture[i].children[0].children[1].textContent;
        let furniturePrice = Number(furniture[i].children[0].children[2].children[0].textContent);
        markedFurniture.push(furnitureName);
        totalPrice += furniturePrice;
        averageDecFactor += Number(furniture[i].children[0].children[3].children[0].textContent);
      }

    }
    averageDecFactor /= countOfFurniture;

    output.value = `Bought furniture: ${markedFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
  });

  function create(obj) {
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let tdPic = document.createElement('td');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdDecFactor = document.createElement('td');
    let tdMark = document.createElement('td');

    let img = document.createElement('img');
    img.src = obj["img"];
    tdPic.appendChild(img);
    let pName = document.createElement('p');
    pName.textContent = obj["name"];
    tdName.appendChild(pName);
    let pPrice = document.createElement('p');
    pPrice.textContent = obj["price"];
    tdPrice.appendChild(pPrice);
    let pDecFacetor = document.createElement('p');
    pDecFacetor.textContent = obj["decFactor"];
    tdDecFactor.appendChild(pDecFacetor);
    let inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    tdMark.appendChild(inputCheckbox);

    tr.appendChild(tdPic);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDecFactor);
    tr.appendChild(tdMark);

    tbody.appendChild(tr);

    return tbody;
  }
}