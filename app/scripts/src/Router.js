var BG = BG || {};
BG.view = BG.view || {};

(function($, BG) {
    var Router = Backbone.Router.extend({
        routes: {
            "":                  "index",
            "/":                 "index",
            "group/:id":         "showGroup",
            "user/:id":          "showUser",
            "user/:id/groups":   "showGroups",
            "group/:id/bg":      "showBoardGamesInGroup",
            "user/:id/bg":       "showBoardGamesUserHave",
            "bg/:id":            "showBoardGame"
        },

        index: function() {
            BG.view.appView.render();
        },

        /**
         * Show group info page
         *
         * @param groupId {Integer}    Group id.
         */
        showGroup: function(groupId) {
            var group = new BG.GroupModel({id: groupId});
            var groupView = new BG.GroupView({model: group});
            groupView.render();
        },

        /**
         * Show user info page.
         *
         * @param userId {Integer}    User id.
         */
        showUser: function(userId) {
            var user = new BG.UserModel({id: groupId});
            var userView = new BG.UserView({model: user});
            userView.render();
        },

        /**
         * Show user info page
         */
        showUser: function(id) {
//            BG.UserView.render();
        },

        /**
         * Show boardgame info page
         */
        showBoardGame: function(id) {
//            .render();
        },
    });

    BG.Router = Router;

})(this.jQuery, BG);
