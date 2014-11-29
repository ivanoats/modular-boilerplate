describe('hello world home page', function() {
  it('should say hello world', function() {
    browser.get('http://www.localhost:3000');

    expect(element(By.id('hello'))).toEqual('hello world');
  });
});