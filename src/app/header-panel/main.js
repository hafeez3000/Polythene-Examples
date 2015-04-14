define(function(require) {
    'use strict';

    var m = require('mithril'),
        headerPanel = require('polythene/header-panel/header-panel'),
        iconBtn = require('polythene/icon-button/icon-button'),
        toolbar = require('polythene/toolbar/toolbar'),
        nav = require('nav'),
        btn,
        toolbarRow,
        panel,
        content,
        template;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    template = [
        '<div class="content">', [
            'Harun Omar and Master Hafiz',
            'keep your dead beautiful ladies',
            'Mine is a little lovelier',
            'than any of your ladies were.',
            '',
            'In her perfectest array',
            'my lady, moving in the day,',
            'is a little stranger thing',
            'than crisp Sheba with her king',
            'in the morning wandering.',
        ].join('<br />'),
        '</div>'
    ].join('');

    btn = function(group, name) {
        return m.component(iconBtn, {
            icon: {
                svg: {
                    group: group,
                    name: name
                }
            }
        });
    };

    toolbarRow = [
        btn('navigation', 'menu'),
        m('span[flex]', 'Toolbar'),
        btn('navigation', 'refresh'),
        btn('content', 'add')
    ];

    panel = {
        view: function(ctrl, args) {
            return m('div', args.props, [
                m.component(headerPanel, args.panel)
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'header-panel',
                    title: 'Header Panel',
                    subtitle: 'Mithril version'
                }),
                m.component(panel, {
                    props: {
                        className: 'flex-container'
                    },
                    panel: {
                        tag: 'div[flex]',
                        header: {
                            content: 'Flex'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'standard',
                        header: {
                            content: 'Standard'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'seamed',
                        header: {
                            content: 'Seamed'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall',
                        header: {
                            content: 'Waterfall'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'tall',
                        header: {
                            content: 'Waterfall tall'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'tall',
                        header: {
                            className: 'medium-tall',
                            content: 'Waterfall tall (tallClass: medium-tall)'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'scroll',
                        header: {
                            content: 'Scroll'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        header: m.component(toolbar, {
                            content: toolbarRow
                        }),
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        header: m.component(toolbar, {
                            mode: 'tall',
                            content: toolbarRow
                        }),
                        content: m.trust(template)
                    }
                })
            ];
        }
    };

    m.mount(document.body, content);
});