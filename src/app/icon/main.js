define(function(require){
    'use strict';

    var m = require('mithril'),
    	icon = require('polythene/icon/icon'),
    	nav = require('nav'),
    	block,
    	example;

	require('polythene/layout/layout');

	block = function(label, iconClass) {
		return m('div', {class: 'p-block'}, [
			m('span', label),
			icon({
				iconClass: iconClass
			}).view()
		]);
	};

	example = {};
	example.controller = function() {};
	example.view = function() {
		return [
			nav('icon', 'Icon', 'Mithril version'),
			block('Menu', 'md-menu'),
			block('Add', 'md-add'),
			block('Refresh', 'md-refresh')
		];
	};

	m.module(document.body, example);
});