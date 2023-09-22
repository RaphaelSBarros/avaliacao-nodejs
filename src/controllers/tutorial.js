const ServicoTutorial = require("../services/tutorial");

const servico = new ServicoTutorial();

class ControllerTutorial{
    Mensagem(req, res){
        try{
            const result = servico.Mensagem();
            res.status(200).json({
                result
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: "Um erro ocorreu"
            });
        }
    }
}

module.exports = ControllerTutorial;