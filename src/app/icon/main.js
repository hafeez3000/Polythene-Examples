define(function(require) {
    'use strict';

    var m = require('mithril'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        github = require('github'),
        block,
        titleBlock,
        content;

    require('polythene/layout/layout');
    require('css!app-css');

    block = {
        view: function(ctrl, args) {
            return m('.p-block.p-inner-block.p-large', [
                m('span', args.label),
                m.trust(' '),
                m.component(icon, args.icon)
            ]);
        }
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('h2', args.title),
                args.info ? args.info : null,
                args.content
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'icon',
                    title: 'Icon',
                    subtitle: 'Mithril version'
                }),
                m.component(titleBlock, {
                    title: 'Iconset: Material Design Icon Font',
                    info: m('p', 
                        m.trust('SVG icons from <a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a>')
                    ),
                    content: [
                        m.component(block, {
                            label: 'Menu',
                            icon: {
                                svg: {
                                    group: 'navigation',
                                    name: 'menu'
                                },
                                className: 'md'
                            }
                        }),
                        m.component(block, {
                            label: 'Add',
                            icon: {
                                svg: {
                                    group: 'content',
                                    name: 'add'
                                },
                                className: 'md'
                            }
                        }),
                        m.component(block, {
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

                m.component(titleBlock, {
                    title: 'Iconset: Templarian Material Design',
                    info: m('p', 
                        m.trust('SVG icons from <a href="https://github.com/Templarian/MaterialDesign">Templarian / Material Design</a>')
                    ),
                    content: [
                        m.component(block, {
                            label: 'Barcode',
                            icon: {
                                svg: {
                                    name: 'barcode',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        m.component(block, {
                            label: 'Happy',
                            icon: {
                                svg: {
                                    name: 'emoticon-happy',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        m.component(block, {
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

                m.component(titleBlock, {
                    title: 'Sizing icons (large, medium, normal, small)',
                    content: [
                        m.component(block, {
                            label: 'Happy',
                            icon: {
                                type: 'large',
                                svg: {
                                    name: 'emoticon-happy',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        m.component(block, {
                            label: 'Happy',
                            icon: {
                                type: 'medium',
                                svg: {
                                    name: 'emoticon-happy',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        m.component(block, {
                            label: 'Happy',
                            icon: {
                                type: 'normal',
                                svg: {
                                    name: 'emoticon-happy',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        }),
                        m.component(block, {
                            label: 'Happy',
                            icon: {
                                type: 'small',
                                svg: {
                                    name: 'emoticon-happy',
                                    iconset: 'mdi'
                                },
                                className: 'mdi'
                            }
                        })
                    ]
                }),

                m.component(titleBlock, {
                    title: 'svg.src',
                    content: [
                        m.component(block, {
                            label: 'Flight',
                            icon: {
                                svg: {
                                    src: 'app/icon/img/ic_flight_24px.svg'
                                },
                                className: 'google'
                            }
                        }),
                        m.component(block, {
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

                m.component(titleBlock, {
                    title: 'icon.src (png)',
                    content: [
                        m.component(block, {
                            label: 'Directions',
                            icon: {
                                src: 'app/icon/img/ic_directions_black_48dp.png'
                            }
                        }),
                        m.component(block, {
                            label: 'Chat',
                            icon: {
                                src: 'app/icon/img/ic_chat_black_48dp.png'
                            }
                        })
                    ]
                }),
                github
            ];
        }
    };

    m.mount(document.body, content);
});