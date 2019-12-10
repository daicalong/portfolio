(function(ng, window, doc, head, src, module) {

    var dependencies = ["ui.router", "ngAnimate", "duScroll"];

    window.app = ng.module(module, dependencies);

    /*
     * BOOTSTRAPPING:
     * TODO: consider
     * by default, each state or modal or anything that makes use of a template will require an http call to retrieve the template (once per template for the remainder of the page being open)
     * what this currently attempts to do is put all templates (using a grunt task) into a single large template, which is loaded before the app is loaded. Then all templates are already known to the templatecache
     * caching response headers will affect both of these strategies
     * we could also do a hybrid (if the large template proves too large/slow), where we grab the full template, but don't actually delay the loading of the app
     * this way, whatever templates are requested before the large template completes will just be normal single requests, but once the full template completes we will be done making template requests
     * 
     * we could also put a subset of templates in the "full" template to - something to expirement with
     * 
     * one (small) benefit to having only the full template and 0 single requests, is that we only would ever have to deploy the full template

     * another option would be to place all the templates in script elements in the head at build time, and deploy a large single html file
     */
    if (preFetchTemplates()) {
        ng.injector(["ng"])
            .invoke([
                "$http", function ($http) {
                    $http.get(src)
                        .then(function (response) {
                            /* globals DOMParser: false */
                            var parser = new DOMParser();
                            var d = parser.parseFromString(response.data, "text/html");
                            var scripts = d.getElementsByTagName("script");
                            //learned this one the hard way: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
                            for (var i = 0; i < scripts.length; i++) {
                                var newScript = d.importNode(scripts[i], true);
                                head.appendChild(newScript);
                            }
                        })
                        .finally(function () {
                            bootstrap();
                        });
                }
            ]);
    } else {
        bootstrap();
    }

    function bootstrap() {
        ng.element(doc).ready(function () {
            ng.bootstrap(doc, [module], { strictDi: true });
        });
    }

    /*
     * some builds will have the script[type=text/ng-template] already included in the head, other's will fetch the template html
     */
    function preFetchTemplates() {
        //TODO: this
        return false;
        //var scripts = doc.getElementsByTagName("script");
        //for (var i = 0; i < scripts.length; i++) {
        //    if (scripts[i].type === "text/ng-template") {
        //        return false;
        //    }
        //}
        //return true;
    }

})(window.angular, window, window.document, window.document.head, "/build/templates.min.html", "fig.technology.summit"); //jshint ignore:line