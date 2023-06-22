Feature: Creación de un ticket

Scenario: Crear un ticket con datos válidos
  Given que estoy en el formulario de creación del ticket e ingreso los campos obligatorios
  When confirmo la creacion del ticket
  Then se crea el ticket con el titulo "Ticket 1"
