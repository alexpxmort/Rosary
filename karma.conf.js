module.exports = function(config) {
  config.set({
    // ...
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    // ...
    beforeLaunch: function() {
      return new Promise(function(resolve) {
        const xvfb = require('xvfb');
        const xvfbOptions = {
          displayNum: 99,
          silent: true
        };
        const xvfbInstance = new xvfb(xvfbOptions);
        xvfbInstance.start(function(err) {
          if (err) {
            console.log(err);
            process.exit(1);
          }
          resolve();
        });
      });
    },
    afterLaunch: function() {
      return new Promise(function(resolve) {
        xvfbInstance.stop(resolve);
      });
    }
  });
};
