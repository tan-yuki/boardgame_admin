var BG = BG || {};

(function($, exports) {
    var UserCollection = Backbone.Collection.extend({
        model: exports.UserModel
    });

    exports.UserCollection = UserCollection;
})(this.jQuery, BG);
