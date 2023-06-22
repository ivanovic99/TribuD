const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber');
const Product = require('../../../app/models/Product');

Given('que estoy en el formulario de creación del producto e ingreso los campos obligatorios', function () {
   this.title = "Producto 1";
   this.description = "Descripción del producto 1";
   this.status = "Open";
})

When('confirmo la creacion del producto', function () {
   this.product = new Product({"title": this.title, "description": this.description, "status": this.status});
   // this.product.save();
});

Then('se crea el producto con el titulo {string}', function (expectedTitle) {
  assert.equal(this.product.title, expectedTitle)
});