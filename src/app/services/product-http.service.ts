import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService {
  static instance: ProductHttpService | null = null;
  private url = 'https://api.escuelajs.co/api/v1/products';

  private constructor() {}

  static create(): ProductHttpService {
    if (ProductHttpService.instance === null)
    ProductHttpService.instance = new ProductHttpService();

    return ProductHttpService.instance;
  }

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);

    return data;
  }
  async updateProduct(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);

    return data;
  }
  async createProduct(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);

    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.url}/${id}`);

    return data;
  }
}
