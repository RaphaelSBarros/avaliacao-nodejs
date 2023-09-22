const ServicoCalculadora = require("../services/calculadora");

const servico = new ServicoCalculadora();

class ControllerCalculadora{
    Somar(req, res){
        try{
            const result = servico.Somar(req.body.num1, req.body.num2);
            res.status(200).json({
                message: `resultado: ${result}`
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
    Subtrair(req, res){
        try{
            const result = servico.Subtrair(req.body.num1, req.body.num2);
            res.status(200).json({
                message: `resultado: ${result}`
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
    Multiplicar(req, res){
        try{
            const result = servico.Multiplicar(req.body.num1, req.body.num2);
            res.status(200).json({
                message: `resultado: ${result}`
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
    Dividir(req, res){
        try{
            const result = servico.Dividir(req.body.num1, req.body.num2);
            res.status(200).json({
                message: `resultado: ${result}`
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
    Potencia(req, res){
        try{
            const result = servico.Potencia(req.body.base, req.body.expoente);
            res.status(200).json({
                message: `resultado: ${result}`
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
    Raiz(req, res){
        try{
            const result = servico.Raiz(req.body.num1);
            res.status(200).json({
                message: `resultado: ${result}`
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
}

module.exports = ControllerCalculadora;