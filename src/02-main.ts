import { ProductMemoryService } from "./app/services/product.-memory.service";

const productoService = ProductMemoryService.create();

const product = productoService.createProduct({
  title: 'Producto 1',
  price: 100,
  description: 'Bla bla bla',
  categoryId: 12,
  images: []
});

const products = productoService.getAll();

productoService.updateProduct(product.id, {
  title: 'Cambiar nombre'
});

const rta = productoService.findOne(product.id);
console.log(rta);
