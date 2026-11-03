# Teste de mutação — Regras de negócio do sistema de pedidos

- `calculos.js` — programa original (regras de desconto, frete e status)
- `calculos.test.js` — casos de teste 
- `stryker.config.json` — configuração do Stryker Mutator

## Rodar
```bash
npm install
npm test            
npm run mutacao     
```
Relatório HTML: `reports/mutation/mutation.html`
