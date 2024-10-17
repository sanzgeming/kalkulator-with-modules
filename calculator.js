// calculator.js
function processHasil(inputanPertama, inputanKedua, operator) {
    switch (operator) {
        case "+":
            return inputanPertama + inputanKedua;
        case "-":
            return inputanPertama - inputanKedua;
        case "*":
            return inputanPertama * inputanKedua;
        case "/":
            return inputanPertama / inputanKedua;
        case "%":
            return inputanPertama % inputanKedua;
        default:
            throw new Error("Operator tidak valid");
    }
}

module.exports = { processHasil };