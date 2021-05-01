let table = document.getElementById('results').children[1];

fetch('https://stuudentsrdb-default-rtdb.firebaseio.com/.json')
    .then(res => res.json())
    .then(res => {
        let result = Object.entries(res)
        for (let i = 0; i < result.length; i++) {
            let tr = document.createElement('tr');
            let thId = document.createElement('th');
            let thFName = document.createElement('th');
            let thLName = document.createElement('th');
            let thFNumber = document.createElement('th');
            let thGrade = document.createElement('th');

            thId.textContent = result[i][1].Id;
            thFName.textContent = result[i][1].FirstName;
            thLName.textContent = result[i][1].LastName;
            thFNumber.textContent = result[i][1].FacultyNumber;
            thGrade.textContent = result[i][1].Grade;

            tr.append(thId, thFName, thLName, thFNumber, thGrade);
            table.appendChild(tr);
        }
    })