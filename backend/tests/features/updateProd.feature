Feature: Edicion de un producto

Scenario: Editar un producto con datos válidos
  Given que estoy en el formulario de edicion del producto e ingreso los campos obligatorios
  When confirmo la edicion del producto
  Then se edita el producto con el nuevo titulo "Producto editado"
