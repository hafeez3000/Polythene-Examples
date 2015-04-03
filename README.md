# Polythene Examples

Repository of [Polythene](https://github.com/ArthurClemens/Polythene) components.


## Dependencies

Although Polythene can be run from a browser, NodeJS scripts are used to install the dependencies. For this step you need to have `npm` installed - see [Installing Node.js](https://docs.npmjs.com/getting-started/installing-node).

In the root directory, run the following commands:

1. `npm install` - installs grunt, grunt plugins and bower
2. `grunt` - lets bower install the frontend dependencies in the directory `src/app/lib`


The installed frontend dependencies:

* Polythene
* [Mithril](http://lhorie.github.io/mithril)
* [RequireJS](http://requirejs.org)
* [require-css](https://github.com/guybedford/require-css)



## Examples

Example files can be run in a browser. Each example has 2 versions: one with and one without Mithril.

### Firefox

Firefox comes with a  strict "file uri origin" policy by default, so it won't load webfonts when accessing a HTML file in the browser. View the examples using a webserver:

1. In the `src` directory, run `python -m SimpleHTTPServer`
2. Point the browser to [localhost:8000](http://localhost:8000/)


## License

MIT

