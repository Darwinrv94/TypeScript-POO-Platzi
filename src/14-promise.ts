import axios from 'axios';
import { Product } from './app/models/product.model';

(async () => {
  function delay(time: number): Promise<string> {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Hola');
      }, time);
    });

    return promise;
  }

  function getProducts() {
    const promise = axios
      .get('https://api.escuelajs.co/api/v1/products');

    return promise;
  }

  async function getProductsAsync(): Promise<Product[]> {
    const { data } = await axios
      .get<Product[]>('https://api.escuelajs.co/api/v1/products');

    return data;
  }

  const response = await delay(3000);
  console.log(response);

  const products = await getProducts();
  console.log(products.data);

  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();
