function solve() {
   let searchBtn = document.getElementById('searchBtn');
   let searchField = document.getElementById('searchField');
   
   searchBtn.addEventListener('click', search);

   function search() {
      let table = Array.from(document.querySelectorAll('tbody > tr'));
      let regex = new RegExp(searchField.value, 'gim');
      table.map(e => {
         e.classList.remove('select');
         if (e.innerHTML.match(regex) !== null) { 
            e.className = 'select';
         }
      });
     searchField.value = '';
   };
};