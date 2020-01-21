function orderUsernames(array) {
    array = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            console.log(array[i]);            
        }        
    }
};

orderUsernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);