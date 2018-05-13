import * as React from 'react';

import './App.scss';

class App extends React.Component {

  state: {
    counter: number;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div onClick={this.increment}>Hello from the App! ({this.state.counter})</div>
    )
  }

}
export default App;