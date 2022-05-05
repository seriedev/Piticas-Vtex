import currency from 'currency.js';

const REAL = value =>
  currency(value, {
    symbol: 'R$ ',
    precision: 2,
    separator: '.',
    decimal: ',',
    formatWithSymbol: true,
  });

export { REAL };
