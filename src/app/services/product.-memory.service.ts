import faker from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  static instance: ProductMemoryService | null = null;
  private products: Product[] = [];

  private constructor() {}

  static create(): ProductMemoryService {
    if (ProductMemoryService.instance === null)
      ProductMemoryService.instance = new ProductMemoryService();

    return ProductMemoryService.instance;
  }

  getAll(): Product[] {
    return this.products;
  }

  createProduct(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    }

    return this.addProduct(newProduct);
  }

  addProduct(product: Product): Product {
    this.products.push(product);

    return product;
  }

  updateProduct(id: Product['id'], changes: UpdateProductDto ): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products
      .find(prod => prod.id === id);
  }
}
