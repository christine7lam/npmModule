require('chai').should();
var pkg = require('./app');
describe('pkg', function() {
    it('adds two numbers', function() {
        pkg.add(1, 1).should.equal(2);
    });
});