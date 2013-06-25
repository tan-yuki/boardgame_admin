var bg = bg || {};
bg.model = bg.model || {};

(function($, bg) {
    var GroupModel = Backbone.Model.extend({
        defaults: function() {
            return {
                name: null,
                fb_group_link: null
            };
        },

        validate: function() {
            if (! this.get('name')) {
                return 'Empty User name';
            }
        }
    });

    bg.model.GroupModel = GroupModel;
})(this.jQuery, bg);
