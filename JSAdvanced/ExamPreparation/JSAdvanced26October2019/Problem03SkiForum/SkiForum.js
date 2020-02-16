class Forum {
    constructor() {
        this.users = [];
        this.questions = [];
        this.id = 1;
        this.loggedUsers = [];
    }

    register(username, password, repeatPassword, email) {
        if (!(username && password && repeatPassword && email)) {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        let userByName = this.users.find((u) => u.username === username);
        let userByEmail = this.users.find((u) => u.email === email);


        if (userByName && userByEmail) {
            throw new Error('This user already exists!');
        }

        let user = {
            username: username,
            password: password,
            email: email
        }

        this.users.push(user)

        return `${username} with ${email} was registered successfully!`
    }

    login(username, password) { // TODO: check the password
        let userByName = this.users.find((u) => u.username === username);

        if (!(userByName && userByName.password === password)) {
            throw new Error('There is no such user');
        }

        if (userByName.username === username &&
            userByName.password === password) {

            this.loggedUsers.push(userByName);

            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password) {
        let userByName = this.users.find((u) => u.username === username);

        if (!userByName) {
            throw new Error('There is no such user');
        }

        if (userByName.username === username &&
            userByName.password === password) {

            this.loggedUsers.pop(userByName);

            return 'You have logged out successfully';
        }
    }

    postQuestion(username, question) {
        let userByName = this.users.find((u) => u.username === username);

        let firstCondition = this.users.includes(userByName);
        let secoundCondition = this.loggedUsers.includes(userByName);

        if (!(firstCondition && secoundCondition)) {
            throw new Error('You should be logged in to post questions')
        }

        if (question === '') {
            throw new Error('Invalid question')
        }

        let quest = {
            user: username,
            text: question,
            id: this.id,
            answers: []
        }
        this.id++

        this.questions.push(quest);

        return 'Your question has been posted successfully'
    }

    postAnswer(username, questionId, answer) {
        let userByName = this.users.find((u) => u.username === username);

        let firstCondition = this.users.includes(userByName);
        let secoundCondition = this.loggedUsers.includes(userByName);

        if (!(firstCondition && secoundCondition)) {
            throw new Error('You should be logged in to post answers')
        }

        if (answer === '') {
            throw new Error('Invalid answer')
        }

        let findQuestById = this.questions.find((q) => q.id === questionId);

        if (!findQuestById) {
            throw new Error('There is no such question');
        }

        let answ = {
            user: userByName.username,
            text: answer
        }

        findQuestById["answers"].push(answ);

        return 'Your answer has been posted successfully';
    }

    showQuestions() {
        let output = '';

        for (const q of this.questions) {
            output += `Question ${q.id} by ${q.user}: ${q.text}\n`;

            for (const a of q.answers) {
                output += `---${a.user}: ${a.text}\n`

            }
        }

        return output.trim();
    }
}

let forum = new Forum();
console.log(forum.register('Michael', '123', '123', 'michael@abv.bg'));
console.log(forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com'));
console.log(forum.login('Michael', '123'));
console.log(forum.login('Stoyan', '123ab7'));

console.log(forum.postQuestion('Michael', 'Can I rent a snowboard from your shop?'));
console.log(forum.postAnswer('Stoyan', 1, 'Yes, I have rented one last year.'));

console.log(forum.postQuestion('Stoyan', 'How long are supposed to be the ski for my daughter?'));
console.log(forum.postAnswer('Michael', 2, 'How old is she?'));
console.log(forum.postAnswer('Michael', 2, 'Tell us how tall she is.'));

console.log(forum.showQuestions());