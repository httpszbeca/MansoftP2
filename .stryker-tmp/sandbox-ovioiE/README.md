# Teste de Mutação — Regras de Negócio do Sistema de Pedidos

- `calculos.js` — programa original (regras de desconto, frete e status)
- `calculos.test.js` — casos de teste (versão inicial, escore ~38%)
- `stryker.config.json` — configuração do Stryker Mutator

## Rodar
```bash
npm install
npm test            # roda os testes com Jest
npm run mutacao     # gera mutantes, roda os testes e cria o relatório
```
Relatório HTML: `reports/mutation/mutation.html`
