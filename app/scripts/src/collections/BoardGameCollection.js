var BG = BG || {};

(function($, exports) {
    var BoardGameCollection = Backbone.Collection.extend({
        model: exports.BoardGameModel
    });

    exports.BoardGameCollection = BoardGameCollection;
})(this.jQuery, BG);
