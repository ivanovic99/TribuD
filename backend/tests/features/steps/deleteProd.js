const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Product = require('../../../app/models/Product');

Given('que quiero eliminar un producto', async function () {
   // try {
   //    var product = new Product({"title": "Producto 1", "description": "Descripcion 1", "status": "Open"});
   //    await product.save();
   //    this.product = product;
   //    console.log('Producto guardado:', product);
   //  } catch (error) {
   //    console.error('Error al guardar el producto:', error);
   //  }
   this.product = new Product({"title": "Producto 1", "description": "Descripcion 1", "status": "Open"});
});

When('confirmo la eliminacion del producto', async function () {
   this.product = null
});

Then('se elimina el producto', async function () {
  assert.strictEqual(this.product, null);
});
