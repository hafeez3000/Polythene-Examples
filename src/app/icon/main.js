define(function(require) {
    'use strict';

    var m = require('mithril'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        block,
        titleBlock,
        content;

    require('polythene/layout/layout');
    require('css!app-css');

    block = m.component({
        view: function(ctrl, args) {
            var args1 = (JSON.parse(JSON.stringify(args))); // copy object
            return m('div', {
                class: 'p-block p-inner-block p-large'
            }, [
                m('span', args.label),
                m.trust(' '),
                icon(args1)
            ]);
        }
    });

    titleBlock = m.component({
        view: function(ctrl, args) {
            return m('div', {
                class: 'p-block'
            }, [
                m('h2', args.title),
                args.content
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
                titleBlock({
                    title: 'Iconset: Material Design Icon Font',
                    content: [
                        block({
                            label: 'Menu',
                            group: 'navigation',
                            name: 'menu',
                            className: 'md'
                        }),
                        block({
                            label: 'Add',
                            group: 'content',
                            name: 'add',
                            className: 'md'
                        }),
                        block({
                            label: 'Refresh',
                            group: 'navigation',
                            name: 'refresh',
                            className: 'md'
                        })
                    ]
                }),

                titleBlock({
                    title: 'Iconset: Templarian Material Design',
                    content: [
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
                    ]
                }),

                titleBlock({
                    title: 'Icon src (svg)',
                    content: [
                        block({
                            label: 'Flight',
                            src: 'app/icon/img/ic_flight_24px.svg',
                            className: 'google'
                        }),
                        block({
                            label: 'Pin drop',
                            src: 'app/icon/img/ic_pin_drop_48px.svg',
                            className: 'google'
                        })
                    ]
                }),

                titleBlock({
                    title: 'Icon src (png)',
                    content: [
                        block({
                            label: 'Directions',
                            src: 'app/icon/img/ic_directions_black_48dp.png'
                        }),
                        block({
                            label: 'Chat',
                            src: 'app/icon/img/ic_chat_black_48dp.png'
                        })
                    ]
                })
            ];
        }
    });

    m.mount(document.body, content());
});