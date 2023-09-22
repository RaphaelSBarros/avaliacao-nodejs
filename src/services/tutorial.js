class Tutorial{
    Mensagem(){
        return{
            uso: "Para utilizar a calculadora você deve utilizar o seguinte caminho: http://localhost:3000/api/calculadora/*operacao*",
            operacoes: ["soma", "subtracao", "multiplicacao", "divisao", "potencia", "raiz"],
            variaveis:{
                basicas: "num1, num2",
                potencia: "base, expoente",
                raiz: "num1"
            }
        }
    }
}

module.exports = Tutorial;