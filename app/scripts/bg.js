/**
 * Entry point for this application
 * @depe
 */
(function() {
    $(function() {
        bg.exports = {};

        // prepare Applicagtion view
        var app = new bg.view.AppView();
        bg.exports.appView = app;

        // prepare Router
        var router = new bg.Router();
        Backbone.history.start();
        bg.exports.router = router;

        Backbone.history.navigate('/');
    });
})();
