require.config({
    baseUrl: 'app/lib',
    paths: {
        'mithril': 'mithril/mithril',
        'css': 'require-css/css',

        'app': '..',
        'common': '../../common',
        'nav': '../../app-nav'
    },
    map: {
      '*': {
          'css': 'require-css/css'
      }
    },
    shim: {},
    deps: ['require'],
    callback: function(require) {
        'use strict';

        var filename = location.pathname.match(/\/([^\/]*)$/),
            modulename;

        if (filename && filename[1] !== '') {
            modulename = ['app', filename[1].split('.')[0], 'main']
                         .join('/');

            require([modulename]);
        } else {
            if (window.console) {
                console.log('no modulename found via location.pathname');
            }
        }
    }
});