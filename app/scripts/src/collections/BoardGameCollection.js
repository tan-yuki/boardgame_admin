var bg = bg || {};
bg.collection = bg.collection || {};

(function($, bg) {
    var BoardGameCollection = Backbone.Collection.extend({
        model: exports.BoardGameModel
    });

    bg.collection.BoardGameCollection = BoardGameCollection;
})(this.jQuery, bg);
