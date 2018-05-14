import * as React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import ProductStore from './store/ProductStore';

import './App.scss';

type InjectedProps = {
  productStore: ProductStore;
}

@inject('productStore')
@observer
class App extends React.Component {

  @observable counter: number = 0;

  @action increment = () => {
    this.counter = this.counter + 1;
  }

  get injectedProps() {
    return this.props as InjectedProps;
  }

  render() {
    const { productStore } = this.injectedProps;
    return (
      <div>
        <div onClick={this.increment}>Hello from the App! ({this.counter})</div>
        <div>
          <ul>
            {this.injectedProps.productStore.products.map((product, i) => (
              <li key={i}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}
export default App;