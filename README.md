# Magento2 custom grunt task

Adds [grunt-spritesmith] task for any M2 theme.

# Usage

Copy `dev/tools/grunt/configs/sprite.js` and `dev/tools/grunt/tasks/sprite.js` to the same directories in your Magento2 installation.

Open `Gruntfile.js` in the root directory and find something like:

```javascript
[
    taskDir + '/mage-minify',
    taskDir + '/deploy',
    taskDir + '/black-list-generator',
    taskDir + '/clean-black-list',
    taskDir + '/static',
    'time-grunt'
].forEach(function (task) {
    require(task)(grunt);
});
```

And type following before `time-grunt`:

```javascript
taskDir + '/sprite', // Here is our custom sprite task
```

Sprite task is ready for any theme which is defined at `dev/tools/grunt/configs/themes.js`. Before using sprite task don't forget to run `php bin/magento setup:static-content:deploy`

Now you can run sprite task for any theme like this:

```sh
grunt sprite:<theme_name>
```

License
----

MIT

[grunt-spritesmith]: <https://github.com/Ensighten/grunt-spritesmith>
