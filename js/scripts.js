 //Business Logic for Pizza
 function Pizza(toppings, size) {
   this.toppings = toppings;
   this.size = size;
   this.price = 0
 }

 Pizza.prototype.totalPrice = function(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
  } 
  this.price = total;
}
 // User Interface Logic 
$(document).ready(function() {
  $("#pizzaSelector").submit(function(event) {
    event.preventDefault();
    const prices = $("input[data-price]:checked").map(function() {
      return $(this).data('price');
    }).get();
    const toppings = $("input[name='topping']:checked").map(function() {
      return $(this).val();
    }).get();
    const size = $("input[name='size']:checked").val();
    const newOrder = new Pizza(toppings, size);
    
    newOrder.totalPrice(prices);

    console.log(`the total price of your delicious pizza is: $${totalPrice}`)
  });
});
