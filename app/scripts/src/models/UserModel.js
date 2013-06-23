var BG = BG || {};

(function($, exports) {
    var UserModel = Backbone.Model.extend({
        defaults: function() {
            return {
                /**
                 * User's name
                 */
                name: null,

                /**
                 * User's email
                 */
                email: null,

                /**
                 * User's profile image path
                 */
                avatar: null,

                /**
                 * GroupCollection this user belongs to.
                 *
                 * @see GroupCollection
                 */
                group: null
            };
        },

        validate: function() {
            if (! this.get('name')) {
                return 'Empty User name';
            }
        }
    });

    exports.UserModel = UserModel;
})(this.jQuery, BG);
