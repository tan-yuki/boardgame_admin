var bg = bg || {};
bg.collection = bg.collection || {};

(function($, bg) {
    var GroupCollection = Backbone.Collection.extend({
        model: exports.GroupModel
    });

    bg.collection.GroupCollection = GroupCollection;
})(this.jQuery, bg);
