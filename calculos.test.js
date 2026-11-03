const {
  calcularPrecoDoItem,
  calcularDescontoCliente,
  calcularFrete,
  transicaoEhValida,
} = require("./calculos");

describe("calcularPrecoDoItem", () => {
  const produto = { precoProduto: 100 };

  test("sem desconto para 1 unidade", () => {
    expect(calcularPrecoDoItem(produto, 1)).toBe(100);
  });

  test("sem desconto para 2 unidades", () => {
    expect(calcularPrecoDoItem(produto, 2)).toBe(200);
  });

  test("desconto baixo (5%) a partir de 3 unidades", () => {
    expect(calcularPrecoDoItem(produto, 3)).toBeCloseTo(285);
  });

  test("desconto baixo (5%) com 4 unidades", () => {
    expect(calcularPrecoDoItem(produto, 4)).toBeCloseTo(380);
  });

  test("desconto medio (10%) a partir de 5 unidades", () => {
    expect(calcularPrecoDoItem(produto, 5)).toBeCloseTo(450);
  });

  test("desconto medio (10%) com 9 unidades", () => {
    expect(calcularPrecoDoItem(produto, 9)).toBeCloseTo(810);
  });

  test("desconto alto (15%) a partir de 10 unidades", () => {
    expect(calcularPrecoDoItem(produto, 10)).toBeCloseTo(850);
  });

  test("desconto alto (15%) com 11 unidades", () => {
    expect(calcularPrecoDoItem(produto, 11)).toBeCloseTo(935);
  });

});

describe("calcularDescontoCliente", () => {
  const vip = { tipo: "vip" };

  test("cliente normal nao tem desconto", () => {
    expect(calcularDescontoCliente({ tipo: "normal" }, 2000)).toBe(0);
  });

  test("vip com subtotal 500 (nao maior que 500) nao tem desconto", () => {
    expect(calcularDescontoCliente(vip, 500)).toBe(0);
  });

  test("vip abaixo de 500 nao tem desconto", () => {
    expect(calcularDescontoCliente(vip, 100)).toBe(0);
  });

  test("vip com subtotal 501 tem desconto medio (5%)", () => {
    expect(calcularDescontoCliente(vip, 501)).toBeCloseTo(25.05);
  });

  test("vip com subtotal 1000 (nao maior que 1000) tem desconto medio", () => {
    expect(calcularDescontoCliente(vip, 1000)).toBeCloseTo(50);
  });

  test("vip com subtotal 1001 tem desconto alto (10%)", () => {
    expect(calcularDescontoCliente(vip, 1001)).toBeCloseTo(100.1);
  });

  test("vip com subtotal alto (2000) tem 10%", () => {
    expect(calcularDescontoCliente(vip, 2000)).toBeCloseTo(200);
  });
});

describe("calcularFrete", () => {
  test("frete de Campo Grande", () => {
    expect(calcularFrete({ cidade: "Campo Grande" }, 100)).toBe(15);
  });

  test("frete de Sao Paulo", () => {
    expect(calcularFrete({ cidade: "Sao Paulo" }, 100)).toBe(25);
  });

  test("frete de Curitiba", () => {
    expect(calcularFrete({ cidade: "Curitiba" }, 100)).toBe(30);
  });

  test("frete de outras cidades", () => {
    expect(calcularFrete({ cidade: "Manaus" }, 100)).toBe(40);
  });

  test("frete gratis acima de 300", () => {
    expect(calcularFrete({ cidade: "Curitiba" }, 301)).toBe(0);
  });

  test("subtotal exatamente 300 ainda paga frete", () => {
    expect(calcularFrete({ cidade: "Curitiba" }, 300)).toBe(30);
  });

  test("frete gratis tambem vale para outras cidades", () => {
    expect(calcularFrete({ cidade: "Manaus" }, 1000)).toBe(0);
  });
});

describe("transicaoEhValida", () => {
  test("pendente para pago", () => {
    expect(transicaoEhValida("pendente", "pago")).toBe(true);
  });

  test("pendente para cancelado", () => {
    expect(transicaoEhValida("pendente", "cancelado")).toBe(true);
  });

  test("pendente para enviado e invalido", () => {
    expect(transicaoEhValida("pendente", "enviado")).toBe(false);
  });

  test("pendente para entregue e invalido", () => {
    expect(transicaoEhValida("pendente", "entregue")).toBe(false);
  });

  test("pago para enviado", () => {
    expect(transicaoEhValida("pago", "enviado")).toBe(true);
  });

  test("pago para cancelado", () => {
    expect(transicaoEhValida("pago", "cancelado")).toBe(true);
  });

  test("pago para pendente e invalido", () => {
    expect(transicaoEhValida("pago", "pendente")).toBe(false);
  });

  test("pago para entregue e invalido", () => {
    expect(transicaoEhValida("pago", "entregue")).toBe(false);
  });

  test("enviado para entregue", () => {
    expect(transicaoEhValida("enviado", "entregue")).toBe(true);
  });

  test("enviado para cancelado e invalido", () => {
    expect(transicaoEhValida("enviado", "cancelado")).toBe(false);
  });

  test("enviado para pago e invalido", () => {
    expect(transicaoEhValida("enviado", "pago")).toBe(false);
  });

  test("entregue nao muda para nenhum status", () => {
    expect(transicaoEhValida("entregue", "pago")).toBe(false);
    expect(transicaoEhValida("entregue", "cancelado")).toBe(false);
  });

  test("cancelado nao muda para nenhum status", () => {
    expect(transicaoEhValida("cancelado", "pendente")).toBe(false);
    expect(transicaoEhValida("cancelado", "pago")).toBe(false);
  });

  test("status desconhecido nao tem transicao valida", () => {
    expect(transicaoEhValida("qualquer", "pago")).toBe(false);
  });

  test('transicaoEhValida cancelado para entregue e invalido', () => {
    expect(transicaoEhValida('cancelado', 'entregue')).toBe(false);
  });
});