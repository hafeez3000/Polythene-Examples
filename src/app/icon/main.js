define(function(require) {
    'use strict';

    var m = require('mithril'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        block,
        content;

    require('polythene/layout/layout');
    require('css!app-css');

    block = m.component({
        view: function(ctrl, args) {
        	var args1 = (JSON.parse(JSON.stringify(args))); // copy object
            return m('div', {
                class: 'p-block p-large'
            }, [
                m('span', args.label),
                icon(args1)
            ]);
        }
    });

    content = m.component({
        view: function() {
            return [
                nav({
                    baseFileName: 'icon',
                    title: 'Icon',
                    subtitle: 'Mithril version'
                }),
                block({
                    label: 'Menu',
                    group: 'navigation',
                    name: 'menu'
                }),
                block({
                    label: 'Add',
                    group: 'content',
                    name: 'add'
                }),
                block({
                    label: 'Refresh',
                    group: 'navigation',
                    name: 'refresh'
                }),

                block({
                    label: 'Barcode',
                    name: 'barcode',
                    iconset: 'mdi'
                }),
                block({
                    label: 'Happy',
                    name: 'emoticon-happy',
                    iconset: 'mdi'
                }),
                block({
                    label: 'Headphones',
                    name: 'headphones',
                    iconset: 'mdi'
                })
            ];
        }
    });

    m.mount(document.body, content());
});