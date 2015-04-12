define(function(require) {
    'use strict';

    var m = require('mithril'),
        content,
        links;

    require('polythene/layout/layout');
    require('css!app-css');

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
    }];
    content = m.component({
        view: function() {
            return [
                m('div', {
                        class: 'p-title-block'
                    },
                    m('h1', 'Polythene Examples')
                ),
                m('div', {
                    class: 'p-block'
                }, m('table', links.map(function(link) {
                    return m('tr', [
                        m('td', m('span', link.name)),
                        m('td', m('a', {
                            href: link.baseUrl + '.html'
                        }, 'Mithril')),
                        m('td', m('a', {
                            href: link.baseUrl + '-plain.html'
                        }, 'Plain')),
                    ]);
                })))
            ];
        }
    });

    m.mount(document.body, content());
});