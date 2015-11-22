(function () {

    var claculator = calculator || {};

    claculator.add = function(firstNumber, secondNumber) {
        if (!firstNumber || !secondNumber) {
            throw new Error('You must enter two parameters');
        }

        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
            throw new Error('You must enter two numbers');
        }

        return (firstNumber + secondNumber);
    }
})();