 //Business Logic for Pizza Parlor
 function PizzaParlor() {
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

 Pizza.prototype.pizzaOrder = function() {
  return this.toppings + "" + this.size;
 }

 // User Interface Logic 
 let pizzaOrder = new PizzaParlor();


 $(document).ready(function() {
  $("#pizzaSelector").submit(function(event) {
    event.preventDefault();
    const toppings = $("input:checkbox[name=topping]:checked").map(function() {
      return $(this).val();
    }).get();
    const size = $("input:radio[name=size]:checked").val();
    let total = 0;
    let newOrder = new Pizza(toppings, size);
    pizzaOrder.addOrder(newOrder);
    console.log(toppings)
    console.log(pizzaOrder.pizzas);
  
 
    $('input:checked').each(function() {
      total = total + parseInt($(this).data('price'));
    });
    
    $(".total").html(total);
    $("#show-pizza").show();
  });
});