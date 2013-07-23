


require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    var Site={
        init: function(){
        this.tabs();
        },
        
        tabs: function(){
        var tabs = $('#secondary > .tabs'),
            uls = tabs.find('> ul'),
            tabHeadings = tabs.prev('#tabHeadings');

            //hide all the h4s
            tabs.find('h4').remove();

            uls.not(':first').hide();

            //listen for heading clicks:
            tabHeadings.delegate('li', 'click', function(e){
               var li = $(this),
               hash;
               li.siblings().removeClass('selected').end().addClass('selected');
               hash = li.children('a').attr('href'); 
               uls.hide().filter(hash).fadeIn(500);
               e.preventDefault();
            });
    }
}

Site.init();

    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
















