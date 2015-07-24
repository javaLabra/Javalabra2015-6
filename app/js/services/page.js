angular.module('jlApp').factory('Page', function($http, Markdown) {
    var pages = [];
    var crawled = {};

    function crawlAll(uris, relativeURI) {
        uris.forEach(function(link) {
            link = link.absoluteTo(relativeURI);
            var linkString = link.hash('').query('').toString();
            if (crawled[linkString] !== true) {
                crawled[linkString] = true;
                $http.get(linkString)
                    .success(function(data, status, headers, config) {
                        var newLinks = Markdown.parseRelativeLinks(data);
                        pages.push({
                            href: linkString,
                            content: Markdown.parse(data, link)
                        });
                        crawlAll(newLinks, link);
                    })
                    .error(function(data, status, headers, config) {
                        // TODO on error
                    });
            }
        });
    }

    var URIToCrawl = [URI('README.md')];
    crawlAll(URIToCrawl, URIToCrawl[0]);

    return {
        all: pages
    }
});