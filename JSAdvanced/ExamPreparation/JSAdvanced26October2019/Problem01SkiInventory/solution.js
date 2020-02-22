function solve() {
   let productInfo = document.getElementById('add-new').children;
   let name = productInfo[1];
   let quantity = productInfo[2];
   let price = productInfo[3];
   let button = productInfo[4];
   let sectionProducts = document.getElementById('products').children;
   let filterField = document.getElementById('filter');
   let filterButton = sectionProducts[2].children[2];
   let AddToClListButton = document.getElementsByTagName('button');   
   let myProducts = document.getElementById('myProducts').children[1];
   let totalPrice = document.getElementsByTagName('h1')[1]
   let buttonBuy = AddToClListButton[2]; 
   
   
   button.addEventListener('click', (e) => {
      e.preventDefault();
      
      let li = document.createElement('li');
      let span = document.createElement('span');
      span.innerHTML = name.value;
      let strong = document.createElement('strong');
      strong.innerHTML = `Available: ${quantity.value}`
      let div = document.createElement('div');
      let secStrong = document.createElement('strong');
      secStrong.innerHTML = price.value;
      let buttonOnProd = document.createElement('button');
      buttonOnProd.innerHTML = "Add to Client's List";
      buttonOnProd.addEventListener('click', buttonFunc)

      div.appendChild(secStrong);
      div.appendChild(buttonOnProd);
      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(div);
      
      sectionProducts[1].appendChild(li);
   });

   filterButton.addEventListener('click', (e) => {
      e.preventDefault();

      let ul = Array.from(sectionProducts[1].children);

      for (const l of ul) {
         if (l.children[0].innerHTML.toLowerCase().includes(filterField.value.toLowerCase())) {
            l.style.display = 'block';
            
         } else {
            l.style.display = 'none';
         }
      } 
   });

   function buttonFunc(e) {
      e.preventDefault();

      let ul = Array.from(sectionProducts[1].children);
      
      for (const l of ul) {
         if (l.children[0].innerHTML === e.target.parentElement.parentElement.children[0].innerHTML) {
            let quantityOfP = l.children[1].innerHTML.split(' ')[1];
            
            if (quantityOfP > 1) {
               quantityOfP--;
               e.target.parentElement.parentElement.children[1].innerHTML = `Available: ${quantityOfP}`;               
               
            } else {
               quantityOfP--;
               l.remove();
            }

            // if (!Array.from(myProducts).includes(l)) {
            //    myProducts.appendChild(l);
            // }
            let elementsOtTP = totalPrice.innerHTML.split(': ');
            elementsOtTP[1] = Number(elementsOtTP[1]);
            let n = Number(l.children[2].children[0].innerHTML)
            elementsOtTP[1] += n;
            totalPrice.textContent = elementsOtTP[0] + ': ' + elementsOtTP[1].toFixed(2);

            let secLi = document.createElement('li');
            secLi.textContent = l.children[0].innerHTML;
            let nStrong = document.createElement('strong');
            nStrong.innerHTML = Number(l.children[2].children[0].innerHTML).toFixed(2);
            secLi.appendChild(nStrong);
            myProducts.appendChild(secLi);            
         }           
         
      }     
      
      buttonBuy.addEventListener('click', () => {
         myProducts.innerHTML = ''
         totalPrice.innerHTML = 'Total Price: 0.00'
      });
   }
}