define(function(require) {
    'use strict';

    var m = require('mithril'),
        listTile = require('polythene/list-tile/list-tile'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        github = require('github'),
        titleBlock,
        titleLineText,
        infoDoubleLineText,
        content;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    titleLineText = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';

    infoDoubleLineText = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('h2', args.title),
                args.info ? m('p', args.info) : null,
                args.content
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'list-tile',
                    title: 'List Tile',
                    subtitle: 'Mithril version'
                }),

                // Text only

                m.component(titleBlock, {
                    title: 'Single line, no icons',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText
                        }),
                        m.component(listTile, {
                            title: titleLineText
                        }),
                        m.component(listTile, {
                            title: titleLineText
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Double line',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Three lines',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText
                        })
                    ])
                }),

                // Avatars

                m.component(titleBlock, {
                    title: 'Single line with avatar',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/1.png'
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/2.png'
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/3.png'
                            }
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Double line with avatar',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/1.png'
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/2.png'
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/3.png'
                            }
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Three lines with avatar',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/1.png'
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/2.png'
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/3.png'
                            }
                        })
                    ])
                }),

                // Icons

                m.component(titleBlock, {
                    title: 'Single line with icon',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Double line with icon',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: 'Double line tile',
                            info: infoDoubleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        }),
                        m.component(listTile, {
                            title: 'Double line tile',
                            info: infoDoubleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        }),
                        m.component(listTile, {
                            title: 'Double line tile',
                            info: infoDoubleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Three lines with icon',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                svg: {
                                    name: 'star-outline',
                                    iconset: 'mdi'
                                }
                            }
                        })
                    ])
                }),

                // Secondary content

                m.component(titleBlock, {
                    title: 'Single line with secondary item, small icon',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/1.png'
                            },
                            secondary: m.component(icon, {
                                type: 'small',
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/2.png'
                            },
                            secondary: m.component(icon, {
                                type: 'small',
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/3.png'
                            },
                            secondary: m.component(icon, {
                                type: 'small',
                                svg: {
                                    name: 'heart',
                                    iconset: 'mdi'
                                }
                            })
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Double line with secondary item, normal icon',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/1.png'
                            },
                            secondary: m.component(icon, {
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/2.png'
                            },
                            secondary: m.component(icon, {
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/3.png'
                            },
                            secondary: m.component(icon, {
                                svg: {
                                    name: 'heart',
                                    iconset: 'mdi'
                                }
                            })
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Three lines with secondary item, medium icon',
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/1.png'
                            },
                            secondary: m.component(icon, {
                                type: 'medium',
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/2.png'
                            },
                            secondary: m.component(icon, {
                                type: 'medium',
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info_double_line: infoDoubleLineText,
                            icon: {
                                type: 'large',
                                src: 'app/list-tile/avatars/3.png'
                            },
                            secondary: m.component(icon, {
                                type: 'medium',
                                svg: {
                                    name: 'heart',
                                    iconset: 'mdi'
                                }
                            })
                        })
                    ])
                }),

                // Custom content

                m.component(titleBlock, {
                    title: 'SVG icon',
                    content: m('.demo-list.demo-no-zebra.demo-bordered', [
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'medium',
                                className: 'demo-cirle-icon',
                                svg: {
                                    name: 'folder',
                                    iconset: 'mdi'
                                }
                            },
                            secondary: m.component(icon, {
                                type: 'small',
                                svg: {
                                    name: 'information',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'medium',
                                className: 'demo-cirle-icon',
                                svg: {
                                    name: 'folder',
                                    iconset: 'mdi'
                                }
                            },
                            secondary: m.component(icon, {
                                type: 'small',
                                svg: {
                                    name: 'information',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: titleLineText,
                            info: infoDoubleLineText,
                            icon: {
                                type: 'medium',
                                className: 'demo-cirle-icon',
                                svg: {
                                    name: 'folder',
                                    iconset: 'mdi'
                                }
                            },
                            secondary: m.component(icon, {
                                type: 'small',
                                svg: {
                                    name: 'information',
                                    iconset: 'mdi'
                                }
                            })
                        })
                    ])
                }),
                m.component(titleBlock, {
                    title: 'Custom secondary content',
                    info: m.trust('This example uses parameter <code>secondary_tag: \'div[layout][vertical][end]\'</code>'),
                    content: m('.demo-list.demo-no-zebra.demo-bordered', [
                        m.component(listTile, {
                            title: 'Ali Connors',
                            info_double_line: [
                                m('.demo-first', 'Brunch this weekend?'),
                                m('.demo-second', 'I\'ll be in your neighborhood doing errands.'),
                            ],
                            secondary: [
                                m('div', '15 min'),
                                m('div[flex]'),
                                m.component(icon, {
                                    svg: {
                                        name: 'star-outline',
                                        iconset: 'mdi'
                                    }
                                })
                            ],
                            secondary_tag: 'div[layout][vertical][end]'
                        }),
                        m.component(listTile, {
                            title: 'me, Scott, Jennifer',
                            info_double_line: [
                                m('.demo-first', 'Summer BBQ'),
                                m('.demo-second', 'I wish I could come, but I am out of town this weekend.'),
                            ],
                            secondary: [
                                m('div', '2 hr'),
                                m('div[flex]'),
                                m.component(icon, {
                                    svg: {
                                        name: 'star-outline',
                                        iconset: 'mdi'
                                    }
                                })
                            ],
                            secondary_tag: 'div[layout][vertical][end]'
                        }),
                        m.component(listTile, {
                            title: 'Sandra Adams',
                            info_double_line: [
                                m('.demo-first', 'Oui oui'),
                                m('.demo-second', 'Do you have any recommendations? Have received some nice stories but cannot make up my mind.'),
                            ],
                            secondary: [
                                m('div', '6 hr'),
                                m('div[flex]'),
                                m.component(icon, {
                                    svg: {
                                        name: 'star-outline',
                                        iconset: 'mdi'
                                    }
                                })
                            ],
                            secondary_tag: 'div[layout][vertical][end]'
                        })
                    ])
                }),

                // Links

                m.component(titleBlock, {
                    title: 'URLs',
                    info: m.trust('Passing parameters <code>url</code> for the primary content, and <code>secondary_url</code> for the secondary content (the fav icon).'),
                    content: m('.demo-list', [
                        m.component(listTile, {
                            title: 'Toolbar',
                            icon: {
                                type: 'medium',
                                className: 'demo-cirle-icon',
                                svg: {
                                    name: 'folder',
                                    iconset: 'mdi'
                                }
                            },
                            url: 'toolbar.html',
                            url_config: null,
                            secondary_url: 'javascript:alert("Faved Toolbar")',
                            secondary_url_config: null,
                            secondary: m.component(icon, {
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: 'Icon',
                            icon: {
                                type: 'medium',
                                className: 'demo-cirle-icon',
                                svg: {
                                    name: 'folder',
                                    iconset: 'mdi'
                                }
                            },
                            url: 'icon.html',
                            url_config: null,
                            secondary_url: 'javascript:alert("Faved Icon")',
                            secondary_url_config: null,
                            secondary: m.component(icon, {
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        }),
                        m.component(listTile, {
                            title: 'Header Panel',
                            icon: {
                                type: 'medium',
                                className: 'demo-cirle-icon',
                                svg: {
                                    name: 'folder',
                                    iconset: 'mdi'
                                }
                            },
                            url: 'header-panel.html',
                            url_config: null,
                            secondary_url: 'javascript:alert("Faved Header Panel")',
                            secondary_url_config: null,
                            secondary: m.component(icon, {
                                svg: {
                                    name: 'heart-outline',
                                    iconset: 'mdi'
                                }
                            })
                        })
                    ])
                }),
                github
            ];
        }
    };

    m.mount(document.body, content);
});