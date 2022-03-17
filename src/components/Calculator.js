import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    if (!e.target.name) return;
    const { total, next, operation } = Calculate(state, e.target.name);
    if (!next && !total) setState({ total: '0', next, operation });
    else setState({ total, next, operation });
  };
  const btns = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  const operations = '+-x÷=';
  const { total, next } = state;

  return (
    <section className="calculator">
      {total ? (
        <div className="input">{total}</div>
      ) : (
        <div className="input">{next}</div>
      )}
      <div className="buttons">
        {btns.map((btn) => (
          <button
            type="button"
            key={btn}
            name={btn}
            className={`btn ${operations.includes(btn) ? 'operations' : ''}
           ${btn === '0' ? 'span-large' : ''}`}
            onClick={handleClick}
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Calculator;
