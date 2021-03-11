function solve(e) {
    let addBtn = document.getElementsByTagName('button')[0];
    let objModules = {
        Basics: "BASICS-MODULE",
        Fundamentals: "FUNDAMENTALS-MODULE",
        Advanced: "ADVANCED-MODULE",
        DB: "DB-MODULE",
        Web: "WEB-MODULE"
    }

    addBtn.addEventListener('click', (e) => { //TODO: sort lectures in moldules
        e.preventDefault();

        let lectureNameField = document.getElementsByName('lecture-name')[0];
        let lectureDateField = document.getElementsByName('lecture-date')[0];
        let lectureModuleField = document.getElementsByName('lecture-module')[0];
        let divModules = document.getElementsByClassName('modules')[0];

        if (lectureNameField.value !== '' && lectureNameField.value !== ' ' &&
            lectureDateField.value !== '' && lectureModuleField.value !== 'Select module') {
            let allh3 = document.getElementsByTagName('h3');
            let isCreated = false;
            let h3 = undefined;
            for (let i = 0; i < allh3.length; i++) {
                if (allh3[i].textContent == lectureModuleField.value) {
                    h3 = allh3[i];
                    isCreated = true;
                }

            }

            let dateTime = new Date(lectureDateField.value);
            let lectureTime = `${dateTime.getFullYear()}/${(dateTime.getMonth() + 1) < 10 ? "0" : ""}${dateTime.getMonth() + 1}/${(dateTime.getDate()) < 10 ? "0" : ""}${dateTime.getDate()} - ${(dateTime.getHours()) < 10 ? "0" : ""}${dateTime.getHours()}:${(dateTime.getMinutes()) < 10 ? "0" : ""}${dateTime.getMinutes()}`;

            if (isCreated) {
                let divModule = h3.parentElement;
                divModule.classList.add('module');
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                let h4 = document.createElement('h4');
                let delBtn = document.createElement('button');
                h4.textContent = `${lectureNameField.value} - ${lectureTime}`;
                delBtn.classList.add('red');
                delBtn.textContent = 'del';
                delBtn.addEventListener('click', deleteLectrue);
                li.classList.add('flex')
                li.appendChild(h4);
                li.appendChild(delBtn);
                ul.appendChild(li);
                divModule.appendChild(ul);
                divModules.appendChild(divModule)

            } else {
                let divModule = document.createElement('div');
                divModule.classList.add('module');
                let h3 = document.createElement('h3');
                h3.textContent = lectureModuleField.value;
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                let h4 = document.createElement('h4');
                let delBtn = document.createElement('button');
                h4.textContent = `${lectureNameField.value} - ${lectureTime}`;
                delBtn.classList.add('red');
                delBtn.textContent = 'del';
                delBtn.addEventListener('click', deleteLectrue);
                li.classList.add('flex');
                li.appendChild(h4);
                li.appendChild(delBtn);
                ul.appendChild(li);
                divModule.appendChild(h3);
                divModule.appendChild(ul);
                divModules.appendChild(divModule)
            }
        }
    });

    function deleteLectrue(event) {
        event.preventDefault();

        let btn = event.target;
        let lectureDiv = btn.parentElement.parentElement;
        let module = lectureDiv.parentElement;
        console.log(module);
        lectureDiv.remove();

        if (module.children.length < 2) {
            module.remove();
        }
    }
};