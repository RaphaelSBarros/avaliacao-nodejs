class Calculadora{
    Somar(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar números");
        }else{
            return num1 + num2;
        }
    }

    Subtrair(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar números");
        }else{
            return num1 - num2;
        }
    }

    Multiplicar(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar números");
        }else{
            return num1 * num2;
        }
    }

    Dividir(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar números");
        }else{
            return num1 / num2;
        }
    }

    Potencia(base, expoente){
        if (isNaN(base) || isNaN(expoente)) {
            throw new Error("Favor informar números");
        }else{
            return Math.pow(base, expoente);
        }
    }

    Raiz(num1){
        if (isNaN(num1)) {
            throw new Error("Favor informar números");
        }else{
            return Math.sqrt(num1);
        }
    }
}

module.exports = Calculadora;