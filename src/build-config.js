({
    mainConfigFile: 'js/requirejs-config.js',
    paths: {
        'mithril': 'js/lib/mithril/mithril',
        'lib/icon/icon': '../lib/icon/icon',
        'lib/layout/layout': '../lib/layout/layout',
        'lib/toolbar/toolbar': '../lib/toolbar/toolbar',
        'lib/font-iconic/font-iconic': '../lib/font-iconic/font-iconic',
        'lib/icon-button/icon-button': '../lib/icon-button/icon-button',
        'lib/header-panel/header-panel': '../lib/header-panel/header-panel',
        'example/js/examples-page-nav': 'js/examples-page-nav',
        'example/js/lib/require-css/css': 'js/lib/require-css/css',
        'example/js/lib/require-css/css-builder': 'js/lib/require-css/css-builder',
        'example/js/lib/require-css/normalize': 'js/lib/require-css/normalize',
        'example/css/ex-header-panel': 'css/ex-header-panel'
    },
    map: {
      '*': {
        'css': 'example/js/lib/require-css/css',
        'lib/font-iconic/font-iconic.css': '../lib/font-iconic/font-iconic.css'
      }
    },
    dir: '../example-dist',
    findNestedDependencies: true,
    removeCombined: true,
    optimize: 'uglify2',
    modules: [
    	{
            name: '../node_modules/almond/almond',
            include: ['js/ex-icon']
        },
        {
            name: '../node_modules/almond/almond',
            include: ['js/ex-header-panel']
        }
    ]
})