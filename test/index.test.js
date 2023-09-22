const { describe, expect, it } = require("@jest/globals");
const ServicoCalculadora = require("../src/services/calculadora");

describe("Testes do primeiro exercício", () => {
  const servico = new ServicoCalculadora();

  it("Soma de dois numeros", () => {
    const result = servico.Somar(1, 2);
    expect(result).toBe(3);
  });

  it("Subtracao de dois numeros", () => {
    const result = servico.Subtrair(1, 2);
    expect(result).toBe(-1);
  });

  it("Subtracao de dois numeros", () => {
    const result = servico.Subtrair(5, 2);
    expect(result).toBe(3);
  });

  it("Multiplicacao de dois numeros", () => {
    const result = servico.Multiplicar(1, 2);
    expect(result).toBe(2);
  });

  it("Multiplicacao de dois numeros sendo um negativo", () => {
    const result = servico.Multiplicar(-2, 2);
    expect(result).toBe(-4);
  });

  it("Divisao de dois numeros", () => {
    const result = servico.Dividir(2, 2);
    expect(result).toBe(1);
  });

  it("Mostra a potencia de um numero", () => {
    const result = servico.Potencia(2, 2);
    expect(result).toBe(4);
  });

  it("Mostra a potencia de um numero de base 1", () => {
    const result = servico.Potencia(1, 22);
    expect(result).toBe(1);
  });

  it("Mostra a potencia de um numero de expoente 0", () => {
    const result = servico.Potencia(1233, 0);
    expect(result).toBe(1);
  });

  it("Mostra a raiz de um numero", () => {
    const result = servico.Raiz(4);
    expect(result).toBe(2);
  });

  it("Mostra a raiz de um numero", () => {
    const result = servico.Raiz(25);
    expect(result).toBe(5);
  });
});
