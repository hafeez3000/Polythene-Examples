define(function(require) {
    'use strict';

    var m = require('mithril'),
        iconBtn = require('polythene/icon-button/icon-button'),
        nav = require('nav'),
        iconBlock,
        content;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    iconBlock = m.component({
        view: function(ctrl, args) {
            var btnArgs = (JSON.parse(JSON.stringify(args))); // copy object
            return m('div', {
                class: 'p-block p-large'
            }, [
                m('span', args.label),
                m.trust(' '),
                iconBtn(btnArgs.btn)
            ]);
        }
    });

    content = m.component({
        view: function() {
            return [
                nav({
                    baseFileName: 'icon-button',
                    title: 'Icon Button',
                    subtitle: 'Mithril version'
                }),
                iconBlock({
                    label: 'Menu',
                    btn: {
                        icon: {
                            svg: {
                                group: 'navigation',
                                name: 'menu'
                            },
                            className: 'md'
                        }
                    }
                }),
                iconBlock({
                    label: 'Add',
                    btn: {
                        icon: {
                            svg: {
                                group: 'content',
                                name: 'add'
                            },
                            className: 'md'
                        }
                    }
                }),
                iconBlock({
                    label: 'Refresh',
                    btn: {
                        icon: {
                            svg: {
                                group: 'navigation',
                                name: 'refresh'
                            },
                            className: 'md'
                        }
                    }
                })
            ];
        }
    });

    m.mount(document.body, content());
});