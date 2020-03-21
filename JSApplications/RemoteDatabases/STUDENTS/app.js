import { getStudents, createStudent } from './requests.js';

let IDField = document.getElementById('id');
let firstNameField = document.getElementById('firstName');
let lastNameField = document.getElementById('lastName');
let facultyNumberField = document.getElementById('facultyNumber');
let gradeField = document.getElementById('grade');
let btnSubmit = document.getElementById('btnSubmit');
let message = document.getElementById('message')
let table = document.getElementById('body')

async function engine() {
    btnSubmit.addEventListener('click', () => {
        table.innerHTML = ''
        message.innerText = '';
        if (IDField.value === '' || firstNameField.value === '' || lastNameField.value === '' ||
            facultyNumberField.value === '' || gradeField.value === '') {
            console.log("Invalid data");
            message.innerText = 'Invalid data !!!'

        } else {
            let obj = {
                ID: Number(IDField.value),
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                facultyNumber: facultyNumberField.value,
                grade: gradeField.value
            };

            console.log(obj);

            createStudent(obj);
        }

        IDField.value = '';
        firstNameField.value = '';
        lastNameField.value = '';
        facultyNumberField.value = '';
        gradeField.value = '';

        loadStudents();
    });

    loadStudents();
}

function loadStudents() {
    return getStudents()
        .then(res => {
            let students = Object.entries(res);//TODO: sort by id this not work : .sort((a, b) => { b[1].ID.localeCompare(a[1].ID) });
            console.log(students);
            
            for (const std of students) {
                let tr = document.createElement('tr');
                let tdID = document.createElement('td');
                tdID.textContent = std[1].ID;
                let tdFN = document.createElement('td');
                tdFN.textContent = std[1].firstName;
                let tdLN = document.createElement('td');
                tdLN.textContent = std[1].lastName;
                let tdFaNum = document.createElement('td');
                tdFaNum.textContent = std[1].facultyNumber;
                let tdGrade = document.createElement('td');
                tdGrade.textContent = std[1].grade;

                tr.appendChild(tdID);
                tr.appendChild(tdFN);
                tr.appendChild(tdLN);
                tr.appendChild(tdFaNum);
                tr.appendChild(tdGrade);
                table.appendChild(tr);
            }
        });
}

engine();