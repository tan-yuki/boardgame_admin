var BG = BG || {};

(function($, exports) {
    var GroupCollection = Backbone.Collection.extend({
        model: exports.GroupModel
    });

    exports.GroupCollection = GroupCollection;
})(this.jQuery, BG);
