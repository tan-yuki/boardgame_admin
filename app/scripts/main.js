(function() {
    $(function() {
        // prepare Applicagtion view
        var app = new BG.AppView();
        BG.view = {};
        BG.view.appView = app;

        // prepare Router
        var router = new BG.Router;
        Backbone.history.start();
        BG.router = router;

        Backbone.history.navigate('/');
    });
})();
