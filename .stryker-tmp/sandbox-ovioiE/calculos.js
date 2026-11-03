// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
function calcularPrecoDoItem(produto, quantidade) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    const QUANTIDADE_MINIMA_DESCONTO_ALTO = 10;
    const DESCONTO_ALTO = 0.15;
    const QUANTIDADE_MINIMA_DESCONTO_MEDIO = 5;
    const DESCONTO_MEDIO = 0.1;
    const QUANTIDADE_MINIMA_DESCONTO_BAIXO = 3;
    const DESCONTO_BAIXO = 0.05;
    const precoBruto = stryMutAct_9fa48("1") ? produto.precoProduto / quantidade : (stryCov_9fa48("1"), produto.precoProduto * quantidade);
    if (stryMutAct_9fa48("5") ? quantidade < QUANTIDADE_MINIMA_DESCONTO_ALTO : stryMutAct_9fa48("4") ? quantidade > QUANTIDADE_MINIMA_DESCONTO_ALTO : stryMutAct_9fa48("3") ? false : stryMutAct_9fa48("2") ? true : (stryCov_9fa48("2", "3", "4", "5"), quantidade >= QUANTIDADE_MINIMA_DESCONTO_ALTO)) {
      if (stryMutAct_9fa48("6")) {
        {}
      } else {
        stryCov_9fa48("6");
        return stryMutAct_9fa48("7") ? precoBruto + precoBruto * DESCONTO_ALTO : (stryCov_9fa48("7"), precoBruto - (stryMutAct_9fa48("8") ? precoBruto / DESCONTO_ALTO : (stryCov_9fa48("8"), precoBruto * DESCONTO_ALTO)));
      }
    }
    if (stryMutAct_9fa48("12") ? quantidade < QUANTIDADE_MINIMA_DESCONTO_MEDIO : stryMutAct_9fa48("11") ? quantidade > QUANTIDADE_MINIMA_DESCONTO_MEDIO : stryMutAct_9fa48("10") ? false : stryMutAct_9fa48("9") ? true : (stryCov_9fa48("9", "10", "11", "12"), quantidade >= QUANTIDADE_MINIMA_DESCONTO_MEDIO)) {
      if (stryMutAct_9fa48("13")) {
        {}
      } else {
        stryCov_9fa48("13");
        return stryMutAct_9fa48("14") ? precoBruto + precoBruto * DESCONTO_MEDIO : (stryCov_9fa48("14"), precoBruto - (stryMutAct_9fa48("15") ? precoBruto / DESCONTO_MEDIO : (stryCov_9fa48("15"), precoBruto * DESCONTO_MEDIO)));
      }
    }
    if (stryMutAct_9fa48("19") ? quantidade < QUANTIDADE_MINIMA_DESCONTO_BAIXO : stryMutAct_9fa48("18") ? quantidade > QUANTIDADE_MINIMA_DESCONTO_BAIXO : stryMutAct_9fa48("17") ? false : stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16", "17", "18", "19"), quantidade >= QUANTIDADE_MINIMA_DESCONTO_BAIXO)) {
      if (stryMutAct_9fa48("20")) {
        {}
      } else {
        stryCov_9fa48("20");
        return stryMutAct_9fa48("21") ? precoBruto + precoBruto * DESCONTO_BAIXO : (stryCov_9fa48("21"), precoBruto - (stryMutAct_9fa48("22") ? precoBruto / DESCONTO_BAIXO : (stryCov_9fa48("22"), precoBruto * DESCONTO_BAIXO)));
      }
    }
    return precoBruto;
  }
}
function calcularDescontoCliente(cliente, subtotal) {
  if (stryMutAct_9fa48("23")) {
    {}
  } else {
    stryCov_9fa48("23");
    const SUBTOTAL_MINIMO_DESCONTO_VIP_ALTO = 1000;
    const DESCONTO_VIP_ALTO = 0.1;
    const SUBTOTAL_MINIMO_DESCONTO_VIP_MEDIO = 500;
    const DESCONTO_VIP_MEDIO = 0.05;
    if (stryMutAct_9fa48("26") ? cliente.tipo === "vip" : stryMutAct_9fa48("25") ? false : stryMutAct_9fa48("24") ? true : (stryCov_9fa48("24", "25", "26"), cliente.tipo !== (stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), "vip")))) {
      if (stryMutAct_9fa48("28")) {
        {}
      } else {
        stryCov_9fa48("28");
        return 0;
      }
    }
    if (stryMutAct_9fa48("32") ? subtotal <= SUBTOTAL_MINIMO_DESCONTO_VIP_ALTO : stryMutAct_9fa48("31") ? subtotal >= SUBTOTAL_MINIMO_DESCONTO_VIP_ALTO : stryMutAct_9fa48("30") ? false : stryMutAct_9fa48("29") ? true : (stryCov_9fa48("29", "30", "31", "32"), subtotal > SUBTOTAL_MINIMO_DESCONTO_VIP_ALTO)) {
      if (stryMutAct_9fa48("33")) {
        {}
      } else {
        stryCov_9fa48("33");
        return stryMutAct_9fa48("34") ? subtotal / DESCONTO_VIP_ALTO : (stryCov_9fa48("34"), subtotal * DESCONTO_VIP_ALTO);
      }
    }
    if (stryMutAct_9fa48("38") ? subtotal <= SUBTOTAL_MINIMO_DESCONTO_VIP_MEDIO : stryMutAct_9fa48("37") ? subtotal >= SUBTOTAL_MINIMO_DESCONTO_VIP_MEDIO : stryMutAct_9fa48("36") ? false : stryMutAct_9fa48("35") ? true : (stryCov_9fa48("35", "36", "37", "38"), subtotal > SUBTOTAL_MINIMO_DESCONTO_VIP_MEDIO)) {
      if (stryMutAct_9fa48("39")) {
        {}
      } else {
        stryCov_9fa48("39");
        return stryMutAct_9fa48("40") ? subtotal / DESCONTO_VIP_MEDIO : (stryCov_9fa48("40"), subtotal * DESCONTO_VIP_MEDIO);
      }
    }
    return 0;
  }
}
function calcularFrete(cliente, subtotal) {
  if (stryMutAct_9fa48("41")) {
    {}
  } else {
    stryCov_9fa48("41");
    const FRETE_CAMPO_GRANDE = 15;
    const FRETE_SAO_PAULO = 25;
    const FRETE_CURITIBA = 30;
    const FRETE_OUTRAS_CIDADES = 40;
    const SUBTOTAL_MINIMO_FRETE_GRATIS = 300;
    if (stryMutAct_9fa48("45") ? subtotal <= SUBTOTAL_MINIMO_FRETE_GRATIS : stryMutAct_9fa48("44") ? subtotal >= SUBTOTAL_MINIMO_FRETE_GRATIS : stryMutAct_9fa48("43") ? false : stryMutAct_9fa48("42") ? true : (stryCov_9fa48("42", "43", "44", "45"), subtotal > SUBTOTAL_MINIMO_FRETE_GRATIS)) {
      if (stryMutAct_9fa48("46")) {
        {}
      } else {
        stryCov_9fa48("46");
        return 0;
      }
    }
    if (stryMutAct_9fa48("49") ? cliente.cidade !== "Campo Grande" : stryMutAct_9fa48("48") ? false : stryMutAct_9fa48("47") ? true : (stryCov_9fa48("47", "48", "49"), cliente.cidade === (stryMutAct_9fa48("50") ? "" : (stryCov_9fa48("50"), "Campo Grande")))) {
      if (stryMutAct_9fa48("51")) {
        {}
      } else {
        stryCov_9fa48("51");
        return FRETE_CAMPO_GRANDE;
      }
    }
    if (stryMutAct_9fa48("54") ? cliente.cidade !== "Sao Paulo" : stryMutAct_9fa48("53") ? false : stryMutAct_9fa48("52") ? true : (stryCov_9fa48("52", "53", "54"), cliente.cidade === (stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), "Sao Paulo")))) {
      if (stryMutAct_9fa48("56")) {
        {}
      } else {
        stryCov_9fa48("56");
        return FRETE_SAO_PAULO;
      }
    }
    if (stryMutAct_9fa48("59") ? cliente.cidade !== "Curitiba" : stryMutAct_9fa48("58") ? false : stryMutAct_9fa48("57") ? true : (stryCov_9fa48("57", "58", "59"), cliente.cidade === (stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), "Curitiba")))) {
      if (stryMutAct_9fa48("61")) {
        {}
      } else {
        stryCov_9fa48("61");
        return FRETE_CURITIBA;
      }
    }
    return FRETE_OUTRAS_CIDADES;
  }
}
function transicaoEhValida(statusAtual, novoStatus) {
  if (stryMutAct_9fa48("62")) {
    {}
  } else {
    stryCov_9fa48("62");
    if (stryMutAct_9fa48("65") ? statusAtual !== "pendente" : stryMutAct_9fa48("64") ? false : stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63", "64", "65"), statusAtual === (stryMutAct_9fa48("66") ? "" : (stryCov_9fa48("66"), "pendente")))) {
      if (stryMutAct_9fa48("67")) {
        {}
      } else {
        stryCov_9fa48("67");
        return stryMutAct_9fa48("70") ? novoStatus === "pago" && novoStatus === "cancelado" : stryMutAct_9fa48("69") ? false : stryMutAct_9fa48("68") ? true : (stryCov_9fa48("68", "69", "70"), (stryMutAct_9fa48("72") ? novoStatus !== "pago" : stryMutAct_9fa48("71") ? false : (stryCov_9fa48("71", "72"), novoStatus === (stryMutAct_9fa48("73") ? "" : (stryCov_9fa48("73"), "pago")))) || (stryMutAct_9fa48("75") ? novoStatus !== "cancelado" : stryMutAct_9fa48("74") ? false : (stryCov_9fa48("74", "75"), novoStatus === (stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), "cancelado")))));
      }
    }
    if (stryMutAct_9fa48("79") ? statusAtual !== "pago" : stryMutAct_9fa48("78") ? false : stryMutAct_9fa48("77") ? true : (stryCov_9fa48("77", "78", "79"), statusAtual === (stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), "pago")))) {
      if (stryMutAct_9fa48("81")) {
        {}
      } else {
        stryCov_9fa48("81");
        return stryMutAct_9fa48("84") ? novoStatus === "enviado" && novoStatus === "cancelado" : stryMutAct_9fa48("83") ? false : stryMutAct_9fa48("82") ? true : (stryCov_9fa48("82", "83", "84"), (stryMutAct_9fa48("86") ? novoStatus !== "enviado" : stryMutAct_9fa48("85") ? false : (stryCov_9fa48("85", "86"), novoStatus === (stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), "enviado")))) || (stryMutAct_9fa48("89") ? novoStatus !== "cancelado" : stryMutAct_9fa48("88") ? false : (stryCov_9fa48("88", "89"), novoStatus === (stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), "cancelado")))));
      }
    }
    if (stryMutAct_9fa48("93") ? statusAtual !== "enviado" : stryMutAct_9fa48("92") ? false : stryMutAct_9fa48("91") ? true : (stryCov_9fa48("91", "92", "93"), statusAtual === (stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), "enviado")))) {
      if (stryMutAct_9fa48("95")) {
        {}
      } else {
        stryCov_9fa48("95");
        return stryMutAct_9fa48("98") ? novoStatus !== "entregue" : stryMutAct_9fa48("97") ? false : stryMutAct_9fa48("96") ? true : (stryCov_9fa48("96", "97", "98"), novoStatus === (stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), "entregue")));
      }
    }
    return stryMutAct_9fa48("100") ? true : (stryCov_9fa48("100"), false);
  }
}
module.exports = stryMutAct_9fa48("101") ? {} : (stryCov_9fa48("101"), {
  calcularPrecoDoItem,
  calcularDescontoCliente,
  calcularFrete,
  transicaoEhValida
});