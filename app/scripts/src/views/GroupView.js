var bg = bg || {};
bg.view = bg.view || {};

(function($, bg) {
    var GroupView = Backbone.View.extend({
        el: '#container',
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },
        render: function() {
            return this;
        }
    });
    bg.view.GroupView = GroupView;
})(jQuery, bg);
