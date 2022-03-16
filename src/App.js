import React from 'react';
import Calculator from './components/Calculator';
import Calculate from './logic/calculate';
import operate from './logic/operate'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}
