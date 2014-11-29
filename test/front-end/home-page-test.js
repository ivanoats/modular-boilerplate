'use strict';
var app = require('../../app/js/app.js');
describe('Home Page', function() {
  it('should return 200', function() {;
    if (window.$) {
      console.log('in test: jQuery is loaded')
    }
    expect(app.foo).toMatch(/bar/);
    expect(window._).toBeDefined();
  });
});
