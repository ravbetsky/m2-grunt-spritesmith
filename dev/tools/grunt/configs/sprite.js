'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    path   = require('./path');

var spriteOptions = {
  sprite: {
      src: combo.autopath('iso', path.pub) + 'web/icons/*.png',
      dest: combo.autopath('iso', path.pub) + 'web/images/sprite.png',
      padding: 5,
      destCss: combo.autopath('iso', path.pub) + 'web/css/source/_sprite.less',
      imgPath: '../images/sprite.png', // path for Less variable relative to _sprite.less
      algorithm: 'binary-tree'
  }
};

module.exports = spriteOptions;