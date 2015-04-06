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
            return m('div', {
                class: 'p-block p-inner-block p-large'
            }, [
                m('span', args.label),
                m.trust(' '),
                icon(args.icon)
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
                            icon: {
                                svg: {
                                    group: 'navigation',
                                    name: 'menu'
                                },
                                className: 'md'
                            }
                        }),
                        block({
                            label: 'Add',
                            icon: {
                                svg: {
                                    group: 'content',
                                    name: 'add'
                                },
                                className: 'md'
                            }
                        }),
                        block({
                            label: 'Refresh',
                            icon: {
                                svg: {
                                    group: 'navigation',
                                    name: 'refresh'
                                },
                                className: 'md'
                            }
                        })
                    ]
                }),

                titleBlock({
                    title: 'Iconset: Templarian Material Design',
                    content: [
                        block({
                            label: 'Barcode',
                            icon: {
                                svg: {
                                    name: 'barcode',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        block({
                            label: 'Happy',
                            icon: {
                                svg: {
                                    name: 'emoticon-happy',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        block({
                            label: 'Headphones',
                            icon: {
                                svg: {
                                    name: 'headphones',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        })
                    ]
                }),

                titleBlock({
                    title: 'svg.src',
                    content: [
                        block({
                            label: 'Flight',
                            icon: {
                                svg: {
                                    src: 'app/icon/img/ic_flight_24px.svg'
                                },
                                className: 'google'
                            }
                        }),
                        block({
                            label: 'Pin drop',
                            icon: {
                                svg: {
                                    src: 'app/icon/img/ic_pin_drop_48px.svg'
                                },
                                className: 'google'
                            }
                        })
                    ]
                }),

                titleBlock({
                    title: 'icon.src (png)',
                    content: [
                        block({
                            label: 'Directions',
                            icon: {
                                src: 'app/icon/img/ic_directions_black_48dp.png'
                            }
                        }),
                        block({
                            label: 'Chat',
                            icon: {
                                src: 'app/icon/img/ic_chat_black_48dp.png'
                            }
                        })
                    ]
                })
            ];
        }
    });

    m.mount(document.body, content());
});