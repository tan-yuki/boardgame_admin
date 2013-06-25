var bg = bg || {};
bg.view = bg.view || {};

(function($, bg) {
    var AppView = Backbone.View.extend({
        el: '#container',
        render: function() {
            this.$el.html(html);
            return this;
        }
    });
    bg.view.AppView = AppView;
})(this.jQuery, bg);
