function solve() {
   let article = document.getElementsByTagName('section')[1];
   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let CategoryInput = document.getElementById('category');
   let contentInput = document.getElementById('content');
   let buttonCreate = document.getElementsByClassName('btn create')[0];  
   let archiveSection = document.getElementsByClassName('archive-section')[0].children[1];      

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

      // titleInput.value = '';
      // CategoryInput.value = '';
      // authorInput.value = '';
      // contentInput.value = '';

      div.appendChild(deleteButtonOnArticle);
      div.appendChild(archiveButtonOnArticle);
      
      crArticle.appendChild(div)
      article.appendChild(crArticle);

      deleteButtonOnArticle.addEventListener('click', (event) => {
         let evtpp = event.target.parentElement.parentElement.remove();         
      });
      archiveButtonOnArticle.addEventListener('click', (a) => {
         let title = a.target.parentElement.parentElement.children[0].textContent;
 
         let li = document.createElement('li');
         li.textContent = title;
 
         archiveSection.appendChild(li);
 
         a.target.parentElement.parentElement.remove(); 
         
         let listItems = Array.from(archiveSection.children);
         archiveSection.innerHTML = '';
 
         listItems
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => archiveSection.appendChild(li));

              
      });      
   });
   
   
}