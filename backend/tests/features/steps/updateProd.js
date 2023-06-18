const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber');
const Product = require('../../../app/models/Product');

var product = new Product({"title": "Producto 1", "description": "Descripcion 1", "status": "Open"});

Given('que estoy en el formulario de edicion del producto e ingreso los campos obligatorios', function () {
   this.product = product;
   this.title = "Producto editado";
})

When('confirmo la edicion del producto', function () {
   this.product.title = this.title;
   // this.product.save();
});

Then('se edita el producto con el nuevo titulo {string}', function (expectedTitle) {
  assert.equal(this.product.title, expectedTitle)
});