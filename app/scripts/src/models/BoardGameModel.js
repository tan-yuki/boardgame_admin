var BG = BG || {};

(function($, exports) {
    var BoardGameModel = Backbone.Model.extend({
        defaults: function() {
            return {
                /**
                 * Boardgame name
                 * @type String
                 */
                name: null,

                /**
                 * ISBN number
                 * @type String
                 */
                isbn: null,

                /**
                 * URL link of amazon
                 * @type String
                 */
                amazonLink: null,

                /**
                 * This boardgame owner
                 * @type BG.UserModel
                 */
                owner: null,

                /**
                 * Register date
                 * @type Date
                 */
                registerDate: null,

                /**
                 * This game description
                 * @type String
                 */
                description: null,

                /**
                 * The count of playing this game.
                 * @type Integer
                 */
                playeCount: 0

            };
        },

        /**
         * Return true if this game have ever been played.
         */
        isPlayed: function() {
            return this.get('playCount') > 0;
        },

        validate: function() {
            if (! this.get('name')) {
                return 'Empty User name';
            }
        }
    });

    exports.BoardGameModel = BoardGameModel;
})(this.jQuery, BG);
