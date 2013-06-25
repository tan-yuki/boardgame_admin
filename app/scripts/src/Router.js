var bg = bg || {};
bg.view = bg.view || {};

(function($, bg) {
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
            bg.view.appView.render();
        },

        /**
         * Show group info page
         *
         * @param groupId {Integer}    Group id.
         */
        showGroup: function(groupId) {
            var group = new bg.GroupModel({id: groupId});
            var groupView = new bg.GroupView({model: group});
            groupView.render();
        },

        /**
         * Show user info page.
         *
         * @param userId {Integer}    User id.
         */
        showUser: function(userId) {
            var user = new bg.UserModel({id: groupId});
            var userView = new bg.UserView({model: user});
            userView.render();
        },

        /**
         * Show user info page
         */
        showUser: function(id) {
//            bg.UserView.render();
        },

        /**
         * Show boardgame info page
         */
        showBoardGame: function(id) {
//            .render();
        },
    });

    bg.Router = Router;

})(this.jQuery, bg);
