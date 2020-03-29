export default {
    get: {
        login(context) {
            console.log(context);

            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs'
            }).then(function () {
                this.partial('../views/user/login.hbs')
            })
        },
        register(context) {
            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs'
            }).then(function () {
                this.partial('../views/user/register.hbs')
            })
        }
    },
    post: {
        login(context) {

        },
        register(context) {
            const { username, password, rePassword } = context.params;

            console.log(username, password, rePassword);
        }
    }
};