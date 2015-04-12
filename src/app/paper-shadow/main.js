define(function(require) {
    'use strict';

    var m = require('mithril'),
        paper_shadow = require('polythene/paper-shadow/paper-shadow'),
        nav = require('nav'),
        titleBlock,
        tapController,
        content;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

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

    tapController = function() {
        var STEPS = 5,
            components = {},
            updateZ;

        updateZ = function(id) {
            if (components[id] === undefined) {
                components[id] = STEPS;
            }
            components[id]++;
            return Math.abs((components[id] % (2 * STEPS)) - STEPS);
        };

        return {
            handleClick: function(e, component, controller) {
                controller.z = updateZ(e.target.getAttribute('data-id'));
            }
        };
    }.call();

    content = m.component({
        view: function() {
            var indices = [0, 1, 2, 3, 4, 5];
            var tapItems = [{
                id: 1,
                className: 'card'
            }, {
                id: 2,
                className: 'fab'
            }];
            return [
                nav({
                    baseFileName: 'paper-shadow',
                    title: 'Paper-Shadow',
                    subtitle: 'Mithril version'
                }),

                titleBlock({
                    title: 'Shadows',
                    content: m('div[layout][horizontal]', [
                        indices.map(function(z) {
                            return paper_shadow({
                                z: z,
                                content: m('div[self-center]', 'z = ' + z),
                                className: 'card',
                                tag: 'div[layout][horizontal]'
                            });
                        })
                    ])
                }),

                titleBlock({
                    title: 'Animated',
                    content: m('div[layout][horizontal]', [
                        tapItems.map(function(item) {
                            return paper_shadow({
                                content: m('div[self-center]', 'tap me'),
                                className: item.className,
                                tag: 'div[animated][layout][horizontal]',
                                props: {
                                    'data-id': item.id
                                },
                                events: {
                                    onclick: tapController.handleClick
                                },
                                animated: true
                            });
                        })
                    ])
                })
            ];
        }
    });

    m.mount(document.body, content());
});