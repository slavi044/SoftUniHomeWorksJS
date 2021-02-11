function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let students = document.getElementsByTagName('tbody')[0].children;
      let input = document.getElementById('searchField').value;
      
      for (let i = 0; i < students.length; i++) {
         let currentEl = students[i].children;
         for (let j = 0; j <= 1; j++) {
            if (currentEl[j].textContent.includes(input) && currentEl[j].textContent.includes(input) !== " ") {
               students[i].className = 'select';
                break;
            } else {
               students[i].classList.remove('select');
            }
            
         }
      }

   }
}