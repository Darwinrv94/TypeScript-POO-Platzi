import { ProductHttpService } from "./app/services/product-http.service";

(async () => {
  const productService = ProductHttpService.create();

  try {
    console.log('--'.repeat(10));

    const products = await productService.getAll();
    console.log(products.length);

    console.log('--'.repeat(10));

    const productId = products[0].id;
    const product = await productService.updateProduct(productId, {
      title: 'Producto modificado',
      description: 'Aca',
      price: 10_000
    });
    console.log(product);

    console.log('--'.repeat(10));

    const findProduct = await productService.findOne(productId);
    console.log(findProduct);
  } catch (error) {
    console.error(error);
  }
})();
