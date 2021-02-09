function search() {
   let input = document.getElementById('searchText').value;
   let towns = document.getElementById('towns').children;
   let output = document.getElementById('result');

   let counter = 0;

   if (input !== '' && input !== null && input !== undefined && input !== ' ') {
      for (let i = 0; i < towns.length; i++) {
         if (towns[i].textContent.toLowerCase().includes(input.toLowerCase())) {
            towns[i].style.fontWeight = 'bold';
            towns[i].style.textDecoration = 'underline';
            counter++;
         } else {
            towns[i].style.fontWeight = '';
            towns[i].style.textDecoration = '';
         }
      }
   }
   
   output.textContent = `"${counter}" matches found`;
}
