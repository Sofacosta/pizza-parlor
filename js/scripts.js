
 //-create pizza constructor with properties for toppings and size
 //create a form where user can choose toppings

 //Business Logic for Pizza Parlor
 function PizzaParlor(){
   this.pizzas = {}
 }

 PizzaParlor.prototype.addOrder = function(pizza) {
   this.pizzas [pizza.toppings] = pizza;
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

