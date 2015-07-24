angular.module('jlApp').factory('Markdown', function($state) {

    function parseRelativeLinks(data) {
        var links = [];
        var renderer = new marked.Renderer();

        renderer.link = function(href, title, text) {
            var uri = URI(href);
            if (uri.is('relative')) {
                links.push(uri);
            }
        }

        marked(data, { renderer: renderer });

        return links;
    }

    function parse(data, relativeURI) {
        var renderer = new marked.Renderer();

        renderer.link = function(href, title, text) {
            var uri = URI(href);
            if (uri.is('relative')) {
                var absolute = URI(href).absoluteTo(relativeURI).hash('').query('');
                href = $state.href('page', {page: absolute.toString()})
            }

            var out = '<a href="' + href + '"';
            if (title) {
                out += ' title="' + title + '"';
            }
            out += '>' + text + '</a>';
            return out;
        }

        renderer.table = function(header, body) {
            return '<div class="table-responsive">\n<table class="table table-bordered">\n'
                + '<thead>\n'
                + header
                + '</thead>\n'
                + '<tbody>\n'
                + body
                + '</tbody>\n'
                + '</table>\n</div>\n';
        }

        return marked(data, { renderer: renderer });
    }

    return {
        parseRelativeLinks: parseRelativeLinks,
        parse: parse
    }
});