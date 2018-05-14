import ProductStore from './ProductStore';

class RootStore {
  productStore: ProductStore;

  constructor(initialState: any) {
    this.productStore = new ProductStore(initialState);
  }
}

export default RootStore;