// initialize the application
var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // define a 'route'
    this.get('#/', async function (context) {
        // load some data
        context.partials = {
            header: await this.load('./templates/common/header.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        }

        this.partial('./templates/home/home.hbs')
    });
});

// start the application


(() => {
    app.run('#/');
    
})();