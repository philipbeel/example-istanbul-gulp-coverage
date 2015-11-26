describe('calculator/subtract', function() {

    it('should return a number when two numeric arguments are passed to `subtract()`', function() {
        expect(calculator.subtract(1,1)).to.be.a('number');
    });

    it('should return sum of `1` when 2 - 1 is passed to `subtract()`', function() {
        expect(calculator.subtract(2,1)).to.equal(1);
    });
});
