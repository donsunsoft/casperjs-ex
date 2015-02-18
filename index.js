var utils = require('utils');

var colorizer = require('colorizer').create('Colorizer');

var f = require('./lib/helper').format;

exports.dump_items = function (items) {
    "use strict";

    var message = f('%s [%s] [%s] %j',
        colorizer.colorize(f('[%s]', "verbose"), "PARAMETER"),
        new Date().toString(),
        "items",
        items);

    console.log(message);

}

var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    loadImages: false

})

exports.casper = casper;

exports.args = casper.cli.has('args') ? JSON.parse(casper.cli.get('args')) : null;

exports.settings = casper.cli.has('settings') ? JSON.parse(casper.cli.get('settings')) : null;
