define(function(require) {
    'use strict';

    var m = require('mithril'),
        toolbar = require('polythene/toolbar/toolbar'),
        iconBtn = require('polythene/icon-button/icon-button'),
        nav = require('nav'),
        toolbarBlock,
        content,
        btn,
        toolbarRow;

    require('polythene/layout/layout');
    require('css!app-css');

    btn = function(group, name) {
        return iconBtn({
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

    toolbarBlock = m.component({
        view: function(ctrl, args) {
            return m('.p-block', [
                m('span', args.label),
                toolbar(args.toolbar)
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
                    label: 'Content',
                    toolbar: {
                        content: toolbarRow
                    }
                }),
                toolbarBlock({
                    label: 'Class dark-theme',
                    toolbar: {
                        className: 'dark-theme',
                        content: toolbarRow
                    }
                }),
                toolbarBlock({
                    label: 'Tall with elements pinned to the bottom',
                    toolbar: {
                        mode: 'tall',
                        bottomBar: toolbarRow
                    }
                }),
                toolbarBlock({
                    label: 'Medium-tall with label aligns to the bottom',
                    toolbar: {
                        mode: 'medium-tall',
                        topBar: toolbarRow,
                        bottomBar: m.trust('<span flex class="indent">Bottom content</span>')
                    }
                }),
                toolbarBlock({
                    label: 'Three bars',
                    toolbar: {
                        mode: 'tall',
                        topBar: toolbarRow,
                        middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
                        bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
                    }
                }),
                toolbarBlock({
                    label: 'With loader bar',
                    toolbar: {
                        mode: 'tall',
                        topBar: toolbarRow,
                        middleBar: m.trust('<div flex class="middle indent">element (e.g. progress) fits at the bottom of the toolbar</div>'),
                        bottomBar: m.trust('<div flex class="bottom fit" style="height: 20px; background-color: #0f9d58;"></div>')
                    }
                })
            ];
        }
    });

    m.mount(document.body, content());
});