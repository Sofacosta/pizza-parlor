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
 // User Interface Logic 
 let pizzaOrder = new PizzaParlor();

 $(document).ready (function() {
  $("form#pizzaSelector").submit(function(event) {
    event.preventDefault();
    const topping = $("input:radio[name=topping]:checked").val();
    const size = $("input:radio[name=size]:checked").val();
    let newOrder = new Pizza(topping, size);
    PizzaParlor.addOrder(newOrder);
    console.log(pizzaParlor.pizza);
  
  });
 });