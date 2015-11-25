describe('calculator/add', function() {

    it('should throw an error when `firstNumber` parameter is omitted', function() {
        expect(calculator.add(1,2)).to.equal(3);
    });
});
