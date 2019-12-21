function printCommonElements(firstArray, secoundArray){
    
    for (let i = 0; i < firstArray.length; i++) {
     
        for (let j = 0; j < secoundArray.length; j++) {
      
            if (firstArray[i] === secoundArray[j]) {
             
                console.log(secoundArray[j]);
                
            }
            
        }
        
    }
}

printCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
