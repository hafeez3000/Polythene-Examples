define(function(require) {
    'use strict';

    var m = require('mithril'),
        item = require('polythene/item/item'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        block,
        titleBlock,
        content,
        settingsIcon,
        accountIcon,
        accountCircleIcon;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    settingsIcon = {
        className: 'md',
        svg: {
            group: 'action',
            name: 'settings'
        }
    };

    accountIcon = {
        className: 'md',
        svg: {
            group: 'action',
            name: 'account-box'
        }
    };

    accountCircleIcon = {
        className: 'md',
        svg: {
            group: 'action',
            name: 'account-circle'
        }
    };

    block = m.component({
        view: function(ctrl, args) {
            return m('div', {
                class: 'p-block p-inner-block'
            }, [
                item(args.item)
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
                    baseFileName: 'item',
                    title: 'Item',
                    subtitle: 'Mithril version'
                }),
                titleBlock({
                    title: 'Items with icon and label',
                    content: [
                        block({
                            item: {
                                icon: settingsIcon,
                                label: 'Settings'
                            }
                        }),
                        block({
                            item: {
                                icon: accountIcon,
                                label: 'Account'
                            }
                        })
                    ]
                }),
                titleBlock({
                    title: 'Items with label only',
                    content: [
                        block({
                            item: {
                                label: 'Settings'
                            }
                        }),
                        block({
                            item: {
                                label: 'Account'
                            }
                        })
                    ]
                }),
                titleBlock({
                    title: 'Links (using <a>)',
                    content: [
                        block({
                            item: {
                                icon: settingsIcon,
                                label: 'Settings',
                                content: m.trust('<a href="#settings" target="_self"></a>')
                            }
                        }),
                        block({
                            item: {
                                icon: accountIcon,
                                label: 'Account',
                                content: m.trust('<a href="#account" target="_self"></a>')
                            }
                        })
                    ]
                }),
                titleBlock({
                    title: 'Items sized with CSS',
                    content: [
                        block({
                            item: {
                                className: 'font-scalable big',
                                icon: settingsIcon,
                                label: 'Settings'
                            }
                        }),
                        block({
                            item: {
                                className: 'font-scalable big',
                                icon: accountIcon,
                                label: 'Account'
                            }
                        }),
                        block({
                            item: {
                                className: 'font-scalable small',
                                icon: settingsIcon,
                                label: 'Settings'
                            }
                        }),
                        block({
                            item: {
                                className: 'font-scalable small',
                                icon: accountIcon,
                                label: 'Account'
                            }
                        })
                    ]
                }),
                titleBlock({
                    title: 'Custom item',
                    content: [
                        block({
                            item: {
                                className: 'contact-item',
                                icon: accountCircleIcon,
                                content: [
                                    m('div[flex]', [
                                        m('div', {class: 'name'}, 'John Doe'),
                                        m('div', {class: 'address'}, '123 A Street, San Francisco, CA')
                                    ]),
                                    icon({
                                        attr: {
                                            role: 'img'
                                        },
                                        svg: {
                                            group: 'navigation',
                                            name: 'more-vert'
                                        }
                                    })
                                ]
                            }
                        })
                    ]
                }),
            ];
        }
    });

    m.mount(document.body, content());
});