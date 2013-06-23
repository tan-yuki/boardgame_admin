var BG = BG || {};

(function($, exports) {
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

    exports.GroupModel = GroupModel;
})(this.jQuery, BG);
