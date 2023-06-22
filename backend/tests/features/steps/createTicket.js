const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber');
const Ticket = require('../../../app/models/Ticket');

Given('que estoy en el formulario de creación del ticket e ingreso los campos obligatorios', function () {
   this.title = "Ticket 1";
   this.description = "Descripción del ticket 1";
   this.status = "Open";
})

When('confirmo la creacion del ticket', function () {
   this.ticket = new Ticket({"title": this.title, "description": this.description, "status": this.status});
   // this.ticket.save();
});

Then('se crea el ticket con el titulo {string}', function (expectedTitle) {
  assert.equal(this.ticket.title, expectedTitle)
});