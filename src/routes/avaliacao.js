const express = require("express");
const ControllerCalculadora = require("../controllers/calculadora");
const ControllerTutorial = require("../controllers/tutorial");

const controllerCalculadora = new ControllerCalculadora;
const controllerTutorial = new ControllerTutorial;
const router = express.Router();

router.get("/", controllerTutorial.Mensagem);
router.get("/api", controllerTutorial.Mensagem);
router.get("/api/calculadora", controllerTutorial.Mensagem);

router.post("/api/calculadora/somar", controllerCalculadora.Somar);
router.post("/api/calculadora/subtrair", controllerCalculadora.Subtrair);
router.post("/api/calculadora/multiplicar", controllerCalculadora.Multiplicar);
router.post("/api/calculadora/dividir", controllerCalculadora.Dividir);
router.post("/api/calculadora/potencia", controllerCalculadora.Potencia);
router.post("/api/calculadora/raiz", controllerCalculadora.Raiz);


module.exports = router;