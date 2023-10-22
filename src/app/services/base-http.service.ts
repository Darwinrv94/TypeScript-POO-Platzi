import axios from 'axios';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export class BaseHttpService<T> {
  // private data: T[] = [];

  constructor(
    private url: string
  ) {}

  async getAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.url);

    return data;
  }
}

(async () => {
  const productService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');

  const products = await productService.getAll();
  console.log(products);

  const categoryService = new BaseHttpService<Category
  >('https://api.escuelajs.co/api/v1/categories');

  const categories = await categoryService.getAll();
  console.log(categories);
})();
