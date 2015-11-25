var calculator = calculator || {};

calculator.add = function(firstNumber, secondNumber) {
    if (!firstNumber || !secondNumber) {
        throw Error('You must enter two parameters');
    }

    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw Error('You must enter two numbers');
    }

    return (firstNumber + secondNumber);
}
