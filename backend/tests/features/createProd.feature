Feature: Creación de un producto

Scenario: Crear un producto con datos válidos
  Given que estoy en el formulario de creación del producto e ingreso los campos obligatorios
  When confirmo la creacion del producto
  Then se crea el producto con el titulo "Producto 1"
