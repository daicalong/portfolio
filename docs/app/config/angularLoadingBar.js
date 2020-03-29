// (function(app){

// })(window.app);
(function(app){
    app.config([
        "cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.spinnerTemplate = '<div class="loading-container"><div class="loading-block"><h2 class="loading-text">Loading...</h2><span class="stripe stripe-1"></span><span class="stripe stripe-2"></span><span class="stripe stripe-3"></span></div></div>';
        }]);
})(window.app);
