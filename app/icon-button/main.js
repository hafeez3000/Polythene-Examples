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

    iconBlock = {
        view: function(ctrl, args) {
            var btnArgs = (JSON.parse(JSON.stringify(args))); // copy object
            return m('.p-block.p-large', [
                m('span', args.label),
                m.trust(' '),
                m.component(iconBtn, btnArgs.btn)
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'icon-button',
                    title: 'Icon Button',
                    subtitle: 'Mithril version'
                }),
                m.component(iconBlock, {
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
                m.component(iconBlock, {
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
                m.component(iconBlock, {
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
    };

    m.mount(document.body, content);
});