define(function(require) {
    'use strict';

    var m = require('mithril'),
        toolbar = require('polythene/toolbar/toolbar'),
        iconBtn = require('polythene/icon-button/icon-button'),
        nav = require('nav'),
        toolbarBlock,
        content;

    require('polythene/layout/layout');
    require('css!app-css');

    toolbarBlock = m.component({
        view: function(ctrl, args) {
            return m('div', {
                class: 'p-block'
            }, [
                m('span', args.label),
                toolbar(args)
            ]);
        }
    });

    content = m.component({
        view: function() {
            return [
                nav({
                    baseFileName: 'toolbar',
                    title: 'Toolbar',
                    subtitle: 'Mithril version'
                }),
                toolbarBlock({
                    className: '',
                    label: 'Content',
                    content: [
                        iconBtn({
                            group: 'navigation',
                            name: 'menu'
                        }),
                        m('span[flex]', 'Toolbar'),
                        iconBtn({
                            group: 'navigation',
                            name: 'refresh'
                        }),
                        iconBtn({
                            group: 'content',
                            name: 'add'
                        })
                    ]
                }),
                toolbarBlock({
                    className: 'dark-theme',
                    label: 'Class dark-theme',
                    content: [
                        iconBtn({
                            group: 'navigation',
                            name: 'menu'
                        }),
                        m('span[flex]', 'Toolbar'),
                        iconBtn({
                            group: 'navigation',
                            name: 'refresh'
                        }),
                        iconBtn({
                            group: 'content',
                            name: 'add'
                        })
                    ]
                }),
                toolbarBlock({
                    className: '',
                    label: 'Tall with elements pinned to the bottom',
                    mode: 'tall',
                    bottomBar: [
                        iconBtn({
                            group: 'navigation',
                            name: 'menu'
                        }),
                        m('span[flex]', 'Toolbar'),
                        iconBtn({
                            group: 'navigation',
                            name: 'refresh'
                        }),
                        iconBtn({
                            group: 'content',
                            name: 'add'
                        })
                    ]
                }),
                toolbarBlock({
                    className: '',
                    label: 'Medium-tall with label aligns to the bottom',
                    mode: 'medium-tall',
                    topBar: [
                        iconBtn({
                            group: 'navigation',
                            name: 'menu'
                        }),
                        m('span[flex]', 'Toolbar'),
                        iconBtn({
                            group: 'navigation',
                            name: 'refresh'
                        }),
                        iconBtn({
                            group: 'content',
                            name: 'add'
                        })
                    ],
                    bottomBar: m.trust('<span flex class="indent">Bottom content</span>')
                }),
                toolbarBlock({
                    className: '',
                    label: 'Three bars',
                    mode: 'tall',
                    topBar: [
                        iconBtn({
                            group: 'navigation',
                            name: 'menu'
                        }),
                        m('span[flex]', 'Toolbar'),
                        iconBtn({
                            group: 'navigation',
                            name: 'refresh'
                        }),
                        iconBtn({
                            group: 'content',
                            name: 'add'
                        })
                    ],
                    middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
                    bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
                }),
                toolbarBlock({
                    className: '',
                    label: 'With loader bar',
                    mode: 'tall',
                    topBar: [
                        iconBtn({
                            group: 'navigation',
                            name: 'menu'
                        }),
                        m('span[flex]', 'Toolbar'),
                        iconBtn({
                            group: 'navigation',
                            name: 'refresh'
                        }),
                        iconBtn({
                            group: 'content',
                            name: 'add'
                        })
                    ],
                    middleBar: m.trust('<div flex class="middle indent">element (e.g. progress) fits at the bottom of the toolbar</div>'),
                    bottomBar: m.trust('<div flex class="bottom fit" style="height: 20px; background-color: #0f9d58;"></div>')
                })
            ];
        }
    });

    m.mount(document.body, content());
});