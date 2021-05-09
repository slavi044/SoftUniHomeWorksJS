const router = Sammy('#main', function () {
    this.get('#/home', function () {
        this.partial('../templates/home/home.hbs');
    });
});

(() => {
    router.run('#/home');
})();