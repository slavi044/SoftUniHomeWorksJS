function sort(array) {
    array = array
    .sort()
    .sort((a, b) => a.length - b.length);
    console.log(array.join('\n'));
    
}

sort(['alpha', 'beta', 'gamma']);