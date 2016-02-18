'use strict';

var combo   = require('./combo'),
    themes  = require('./themes'),
    path    = require('./path'),
    _       = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    themeOptions[name] = {
        src: combo.autopath(name, path.pub) + 'images/icons/*.png',
        dest: combo.autopath(name, path.pub) + 'images/sprite.png',
        padding: 5,
        destCss: combo.autopath(name, path.pub) + 'css/source/_sprite.less',
        imgPath: '../images/sprite.png', // path for less variable relative to main styles file
        algorithm: 'binary-tree'
    };
});

module.exports = themeOptions;