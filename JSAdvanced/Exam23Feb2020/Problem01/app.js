function solve() {
   let article = document.getElementsByTagName('section')[1];
   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let CategoryInput = document.getElementById('category');
   let contentInput = document.getElementById('content');
   let buttonCreate = document.getElementsByClassName('btn create')[0];
   

   buttonCreate.addEventListener('click', (e) => {
      e.preventDefault();

      let crArticle = document.createElement('article');
      let h1 = document.createElement('h1');
      h1.innerHTML = titleInput.value;

      let p1 = document.createElement('p');
      let strong1 = document.createElement('strong');
      strong1.innerHTML = CategoryInput.value;
      p1.textContent = `Category:`
      p1.appendChild(strong1);
      
      let p2 = document.createElement('p');
      let strong2 = document.createElement('strong');
      strong2.innerHTML = authorInput.value;
      p2.textContent = `Creator:`;
      p2.appendChild(strong2);

      let p3 = document.createElement('p');
      p3.innerHTML = contentInput.value;

      crArticle.appendChild(h1);
      crArticle.appendChild(p1);
      crArticle.appendChild(p2);
      crArticle.appendChild(p3);

      let div = document.createElement('div');
      div.className = 'buttons';

      let deleteButtonOnArticle = document.createElement('button');
      deleteButtonOnArticle.className = 'btn delete';
      deleteButtonOnArticle.innerHTML = 'Delete';

      let archiveButtonOnArticle = document.createElement('button');
      archiveButtonOnArticle.className = 'btn archive';
      archiveButtonOnArticle.innerHTML = 'Archive';

      div.appendChild(deleteButtonOnArticle);
      div.appendChild(archiveButtonOnArticle);
      
      crArticle.appendChild(div)
      article.appendChild(crArticle);
      
      console.log(crArticle);
      
   });
   
   
}
