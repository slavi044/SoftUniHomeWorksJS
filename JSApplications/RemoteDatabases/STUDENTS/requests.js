const studentsURL = 'https://remotedb-exercisestudents.firebaseio.com/' // <-- Here paste URL from your database! :) 

function getStudents() {
    return fetch(studentsURL + 'students.json')
        .then(res => res.json())
}

function createStudent(body) {
    return fetch(studentsURL + 'students.json', {
        method: 'POST',
        body: JSON.stringify(body)
    })
}

export { getStudents, createStudent }