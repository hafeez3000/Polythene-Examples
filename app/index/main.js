define(function(require) {
    'use strict';

    var m = require('mithril'),
        listTile = require('polythene/list-tile/list-tile'),
        github = require('github'),
        item,
        content,
        links;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    links = [{
        baseUrl: 'icon',
        name: 'Icon'
    }, {
        baseUrl: 'icon-button',
        name: 'Icon Button'
    }, {
        baseUrl: 'item',
        name: 'Item'
    }, {
        baseUrl: 'toolbar',
        name: 'Toolbar'
    }, {
        baseUrl: 'header-panel',
        name: 'Header Panel'
    }, {
        baseUrl: 'paper-shadow',
        name: 'Paper Shadow'
    }, {
        baseUrl: 'list-tile',
        name: 'List Tile'
    }];

    item = function(title, url, secondaryUrl) {
        return m.component(listTile, {
            title: title,
            icon: {
                type: 'medium',
                className: 'index-cirle-icon',
                svg: {
                    name: 'folder',
                    iconset: 'mdi'
                }
            },
            secondary: 'Plain',
            url: url,
            secondary_url: secondaryUrl,
            url_config: null,
            secondary_url_config: null
        });
    };

    content = {
        view: function() {
            return [
                m('div', {
                        class: 'p-title-block'
                    },
                    m('h1', 'Polythene Examples')
                ),
                m('div', {
                    class: 'p-block'
                }, m('.index-list', links.map(function(link) {
                    return item(link.name, link.baseUrl + '.html', link.baseUrl + '-plain.html');
                }))),
                github
            ];
        }
    };

    m.mount(document.body, content);
});