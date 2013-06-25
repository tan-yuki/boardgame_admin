var bg = bg || {};

(function($, bg) {
    var UserCollection = Backbone.Collection.extend({
        model: exports.UserModel
    });

    bg.collection.UserCollection = UserCollection;
})(this.jQuery, bg);
