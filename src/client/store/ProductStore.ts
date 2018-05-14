import { observable, action } from 'mobx';
import axios from 'axios';

export default class ProductStore {

  @observable products: any[] = [];

  constructor(initialState: any) {
    if (initialState && initialState.products) {
      this.fetchProductsSuccess(initialState.products);
    } else {
      this.fetchProducts();
    }
  }

  @action fetchProducts() {
    axios.get('/api/products')
      .then(response => response.data)
      .then(this.fetchProductsSuccess)
      .catch(this.fetchProductsError);
  }

  @action.bound fetchProductsSuccess(products: any[]) {    
    this.products = products;
  }

  @action.bound fetchProductsError(error: Error) {
    console.error(error);
  }
}