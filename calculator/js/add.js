var calculator = calculator || {};

calculator.add = function(firstNumber, secondNumber) {
    if (!firstNumber || !secondNumber) {
        throw new Error('You must enter two parameters');
    }

    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('You must enter integers');
    }

    return (firstNumber + secondNumber);
}
