function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            let usersInfo = event.path[1].children[9];
            let isAccountUnlocked = event.target.parentNode.children[4].checked;


            if (isAccountUnlocked && buttons[i].textContent === 'Hide it') {
                usersInfo.style.display = 'none';
                buttons[i].textContent = 'Show more';
            }else if (isAccountUnlocked && buttons[i].textContent === 'Show more') {
                usersInfo.style.display = 'inline-block';
                buttons[i].textContent = 'Hide it'
                    
            }
        });
    }
}