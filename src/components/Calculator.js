import React from 'react';
import Calculate from '../logic/calculate';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (!e.target.name) return;
    const { total, next, operation } = Calculate(this.state, e.target.name);
    if (!next && !total) this.setState({ total: '0', next, operation });
    else this.setState({ total, next, operation });
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
    const { total, next } = this.state;
    return (
      <section className="calculator">
        {total ? (
          <div className="input">{total}</div>
        ) : (
          <div className="input">{next}</div>
        )}
        <div className="buttons">
          {btns.map((btn) => (
            <button type="button" key={btn} name={btn} className={`btn ${operations.includes(btn) ? 'operations' : ''} ${btn === '0' ? 'span-large' : ''}`} onClick={this.handleClick}>
              {btn}
            </button>
          ))}
        </div>
      </section>
    );
  }
}
