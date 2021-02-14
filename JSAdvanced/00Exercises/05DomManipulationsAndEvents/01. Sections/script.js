function create(words) {
   let contentDiv = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      createDiv(words[i]);
      
   }

   function createDiv(word) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', () =>{
         p.style.display = 'block';
      });

      contentDiv.appendChild(div);
   }
}