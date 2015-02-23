var expect = require("chai").expect;
var lengthOf = require('./length');

describe('#length', function() {

    it('should return the length of a string', function() {
        var resultLength = lengthOf('asd');
        expect(resultLength).to.eql(3);
    });

});