describe('calculator/add', function() {

    it('should throw an error when `firstNumber` parameter is omitted', function() {
        expect(calculator.add()).to.throw(/You must enter two parameters/);
    });
});
