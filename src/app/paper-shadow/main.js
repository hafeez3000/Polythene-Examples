define(function(require) {
    'use strict';

    var m = require('mithril'),
        paper_shadow = require('polythene/paper-shadow/paper-shadow'),
        nav = require('nav'),
        titleBlock,
        interactiveShadow,
        content;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('h2', args.title),
                args.content
            ]);
        }
    };

    interactiveShadow = {
        controller: function(args) {
            var STEPS = 5,
                defaultZ = 2,
                zs = {},
                calculateZ,
                getNextZ;

            calculateZ = function(workingZ) {
                return Math.abs((workingZ % (2 * STEPS)) - STEPS);
            };

            getNextZ = function(id, controller) {
                if (zs[id] === undefined) {
                    zs[id] = STEPS + controller.z();
                }
                zs[id] ++;
                return calculateZ(zs[id]);
            };

            return {
                handleClick: function(e, component, controller) {
                    var z;
                    z = getNextZ(args.id, controller);
                    controller.z(z);
                },
                getZ: function(id) {
                    if (zs[id] !== undefined) {
                        return calculateZ(zs[id]);
                    } else {
                        return defaultZ;
                    }
                }
            };
        },
        view: function(ctrl, args) {
            var paperShadow = m.component(paper_shadow, {
                content: m('div[self-center]', [
                    m('span', 'tap me'),
                    m('br'),
                    m('span', 'z = ' + ctrl.getZ(args.id))
                ]),
                className: args.className,
                tag: 'div[animated][layout][horizontal]',
                events: {
                    onclick: ctrl.handleClick
                },
                animated: true,
                z: ctrl.getZ(args.id)
            });
            return paperShadow;
        }
    };

    content = {
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
                m.component(nav, {
                    baseFileName: 'paper-shadow',
                    title: 'Paper-Shadow',
                    subtitle: 'Mithril version'
                }),

                m.component(titleBlock, {
                    title: 'Shadows',
                    content: m('div[layout][horizontal]', [
                        indices.map(function(z) {
                            return m.component(paper_shadow, {
                                z: z,
                                content: m('div[self-center]', 'z = ' + z),
                                className: 'card',
                                tag: 'div[layout][horizontal]'
                            });
                        })
                    ])
                }),

                m.component(titleBlock, {
                    title: 'Interactive and animated',
                    content: m('div[layout][horizontal]', [
                        tapItems.map(function(item) {
                            return m.component(interactiveShadow, {
                                id: item.id,
                                className: item.className
                            });
                        })
                    ])
                })
            ];
        }
    };

    m.mount(document.body, content);
});