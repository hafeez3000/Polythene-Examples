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

    block = {
        view: function(ctrl, args) {
            return m('.p-block.p-inner-block', [
                m.component(item, args.item)
            ]);
        }
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('h2', args.title),
                args.content
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'item',
                    title: 'Item',
                    subtitle: 'Mithril version'
                }),
                m.component(titleBlock, {
                    title: 'Items with icon and label',
                    content: [
                        m.component(block, {
                            item: {
                                icon: settingsIcon,
                                label: 'Settings'
                            }
                        }),
                        m.component(block, {
                            item: {
                                icon: accountIcon,
                                label: 'Account'
                            }
                        })
                    ]
                }),
                m.component(titleBlock, {
                    title: 'Items with label only',
                    content: [
                        m.component(block, {
                            item: {
                                label: 'Settings'
                            }
                        }),
                        m.component(block, {
                            item: {
                                label: 'Account'
                            }
                        })
                    ]
                }),
                m.component(titleBlock, {
                    title: 'Links (using <a>)',
                    content: [
                        m.component(block, {
                            item: {
                                icon: settingsIcon,
                                label: 'Settings',
                                content: m.trust('<a href="#settings" target="_self"></a>')
                            }
                        }),
                        m.component(block, {
                            item: {
                                icon: accountIcon,
                                label: 'Account',
                                content: m.trust('<a href="#account" target="_self"></a>')
                            }
                        })
                    ]
                }),
                m.component(titleBlock, {
                    title: 'Items sized with CSS',
                    content: [
                        m.component(block, {
                            item: {
                                className: 'font-scalable big',
                                icon: settingsIcon,
                                label: 'Settings'
                            }
                        }),
                        m.component(block, {
                            item: {
                                className: 'font-scalable big',
                                icon: accountIcon,
                                label: 'Account'
                            }
                        }),
                        m.component(block, {
                            item: {
                                className: 'font-scalable small',
                                icon: settingsIcon,
                                label: 'Settings'
                            }
                        }),
                        m.component(block, {
                            item: {
                                className: 'font-scalable small',
                                icon: accountIcon,
                                label: 'Account'
                            }
                        })
                    ]
                }),
                m.component(titleBlock, {
                    title: 'Custom item',
                    content: [
                        m.component(block, {
                            item: {
                                className: 'contact-item',
                                icon: accountCircleIcon,
                                content: [
                                    m('div[flex]', [
                                        m('div', {class: 'name'}, 'John Doe'),
                                        m('div', {class: 'address'}, '123 A Street, San Francisco, CA')
                                    ]),
                                    m.component(icon, {
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
    };

    m.mount(document.body, content);
});