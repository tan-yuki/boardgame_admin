var BG = BG || {};

(function($, BG) {
    var AppView = Backbone.View.extend({
        el: '#container',
        render: function() {
            var html = '<h1>This is AppView</h1>';
            this.$el.html(html);
            return this;
        }
    });
    BG.AppView = AppView;
})(this.jQuery, BG);
