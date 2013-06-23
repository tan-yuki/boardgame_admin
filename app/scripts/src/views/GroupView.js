var BG = BG || {};

(function($, BG) {
    var GrouptView = Backbone.View.extend({
        el: '#container',
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },
        render: function() {
            return this;
        }
    });
})(jQuery, BG);
