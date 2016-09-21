require('chai').should();


var pkg = require('./app');

describe('pkg', function() {
    it('adds two numbers', function() {
        pkg.add(1, 1).should.equal(2);
    });
    it('multiply three numbers', function() {
        pkg.mul(2, 3, 1).should.equal(6);
    })
});