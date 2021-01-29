
 //create a form where user can choose toppings

 //Business Logic for Pizza Parlor
 function PizzaParlor(){
   this.pizzas = {}
   this.currentId = 0;
 }

 PizzaParlor.prototype.addOrder = function(pizza) {
   pizza.id = this.assignId();
   this.pizzas[pizza.id] = pizza;
 }

 PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
 }

 PizzaParlor.prototype.findPizza = function(id) {
   if (this.pizzas[id] != undefined) {
     return this.pizzas [id];
   }
   return false;
 }
 
 //Business Logic for Pizza
 function Pizza(toppings, size) {
   this.toppings = toppings;
   this.size = size;
 }

 Pizza.prototype.pizzaOrder = function () {
  return this.toppings + "" + this.size;
 }
 let pizzaParlor = new PizzaParlor();
 let pizza1 = new Pizza("cheese", "small");
 let pizza2 = new Pizza("pepperoni", "big");

