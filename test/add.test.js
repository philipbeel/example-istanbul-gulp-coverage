describe('calculator/add', function() {

    it('should throw an error when both parameters are omitted', function() {
        expect(calculator.add).to.throw(/You must enter two parameters/);
    });

    it('should throw an error when parameters are not itegers', function() {
        var expectation = function () {
            calculator.add('foo', 'bar');
        }

        expect(expectation).to.throw(/You must enter integers/);
    });

    it('should return a number when two numeric arguments are passed to `add()`', function() {
        expect(calculator.add(1,1)).to.be.a('number');
    });

    it('should return sum of `2` when 1 + 1 is passed to `add()`', function() {
        expect(calculator.add(1,1)).to.equal(2);
    });
});
