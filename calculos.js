function calcularPrecoDoItem(produto, quantidade) {
  const QUANTIDADE_MINIMA_DESCONTO_ALTO = 10;
  const DESCONTO_ALTO = 0.15;
  const QUANTIDADE_MINIMA_DESCONTO_MEDIO = 5;
  const DESCONTO_MEDIO = 0.1;
  const QUANTIDADE_MINIMA_DESCONTO_BAIXO = 3;
  const DESCONTO_BAIXO = 0.05;

  const precoBruto = produto.precoProduto * quantidade;

  if (quantidade >= QUANTIDADE_MINIMA_DESCONTO_ALTO) {
    return precoBruto - precoBruto * DESCONTO_ALTO;
  }
  if (quantidade >= QUANTIDADE_MINIMA_DESCONTO_MEDIO) {
    return precoBruto - precoBruto * DESCONTO_MEDIO;
  }
  if (quantidade >= QUANTIDADE_MINIMA_DESCONTO_BAIXO) {
    return precoBruto - precoBruto * DESCONTO_BAIXO;
  }
  return precoBruto;
}

function calcularDescontoCliente(cliente, subtotal) {
  const SUBTOTAL_MINIMO_DESCONTO_VIP_ALTO = 1000;
  const DESCONTO_VIP_ALTO = 0.1;
  const SUBTOTAL_MINIMO_DESCONTO_VIP_MEDIO = 500;
  const DESCONTO_VIP_MEDIO = 0.05;

  if (cliente.tipo !== "vip") {
    return 0;
  }
  if (subtotal > SUBTOTAL_MINIMO_DESCONTO_VIP_ALTO) {
    return subtotal * DESCONTO_VIP_ALTO;
  }
  if (subtotal > SUBTOTAL_MINIMO_DESCONTO_VIP_MEDIO) {
    return subtotal * DESCONTO_VIP_MEDIO;
  }
  return 0;
}

function calcularFrete(cliente, subtotal) {
  const FRETE_CAMPO_GRANDE = 15;
  const FRETE_SAO_PAULO = 25;
  const FRETE_CURITIBA = 30;
  const FRETE_OUTRAS_CIDADES = 40;
  const SUBTOTAL_MINIMO_FRETE_GRATIS = 300;

  if (subtotal > SUBTOTAL_MINIMO_FRETE_GRATIS) {
    return 0;
  }
  if (cliente.cidade === "Campo Grande") {
    return FRETE_CAMPO_GRANDE;
  }
  if (cliente.cidade === "Sao Paulo") {
    return FRETE_SAO_PAULO;
  }
  if (cliente.cidade === "Curitiba") {
    return FRETE_CURITIBA;
  }
  return FRETE_OUTRAS_CIDADES;
}

function transicaoEhValida(statusAtual, novoStatus) {
  if (statusAtual === "pendente") {
    return novoStatus === "pago" || novoStatus === "cancelado";
  }
  if (statusAtual === "pago") {
    return novoStatus === "enviado" || novoStatus === "cancelado";
  }
  if (statusAtual === "enviado") {
    return novoStatus === "entregue";
  }
  return false;
}

module.exports = {
  calcularPrecoDoItem,
  calcularDescontoCliente,
  calcularFrete,
  transicaoEhValida,
};
