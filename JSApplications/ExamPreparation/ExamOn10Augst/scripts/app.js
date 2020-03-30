import controllers from '../controllers/index.js';

const app = Sammy('#root', function () {
   this.use('Handlebars', 'hbs'); 

   //Home
   this.get('#/home', controllers.home.get.home);
   

   //User
   this.get('#/user/login', controllers.user.get.login);
   this.get('#/user/register', controllers.user.get.register);

   this.post('#/user/login', controllers.user.post.login);
   this.post('#/user/register', controllers.user.post.register);


   //Causes
   this.get('#/cause/dashboard', controllers.cause.getdashboard);
   this.get('#/cause/create');
});

(() => {
    app.run('#/home');
})();