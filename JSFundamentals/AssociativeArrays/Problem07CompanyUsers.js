function addEmploye(arr) {
    let companies = {};

    for (const emploey of arr) {
        let tokens = emploey.split(' -> ');
        let company = tokens.shift();
        let person = tokens.shift();

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        
        if (!companies[company].includes(person)) {
            companies[company].push(person);
        }
    }

    let orderedComp = Object.entries(companies)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for (const company of orderedComp) {
        console.log(company[0]);
        for (const employe of company[1]) {
            console.log(`-- ${employe}`);
            
        }
    }  
}

addEmploye([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);