import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
    return (
      <section className="calculator">
        <div className="input">0</div>
        <div className="buttons">
          {btns.map((btn) => (
            <button type="button" key={btn} id={btn} className={`btn ${operations.includes(btn) ? 'operations' : ''} ${btn === '0' ? 'span-large' : ''}`}>
              {btn}
            </button>
          ))}
        </div>
      </section>
    );
  }
}
