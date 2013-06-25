var bg = bg || {};

(function($, bg) {
    var cache = {};
    var Template = {
        render: function(path, data, options) {
            if (cache[path]) {
                return;
            }

            $.get(path, function(template) {
                cache[path] = template;
                 var renderredHtml = Mustache.to_html(template, data);
                 if (typeof options.callback === 'function') {
                     options.callback(renderredHtml);
                 }
            });
        }
    };
})(jQuery, bg);
