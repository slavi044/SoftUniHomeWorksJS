function solve(info){
    let obj = {};

    while (info.length > 0) {
        let product = info.shift();
        let qunatity = Number(info.shift());

        obj[product] = qunatity;
    }

    console.log(obj);
    

}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);