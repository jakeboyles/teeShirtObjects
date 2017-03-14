// ALL OF OUR ITEMS WE ARE GOING TO BE INTERACTING WITH

var buttonBlue = document.getElementById('blueButton');
var buttonPink = document.getElementById('pinkButton');
var buttonOrange = document.getElementById('orangeButton');
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');
var htmlBox = document.getElementById('itemsInCart');
var showButton = document.getElementById('showCart');
var prices = document.querySelector('.prices');

// Stores wheather the cart is showing or not.
var isCartShowing = false;

// Our three items that we have for sale.
var blueShirt = {
  name:'Save my Trees',
  price:29,
}

var pinkShirt = {
  name:'Nature Lover',
  price:19,
}

var orangeShirt = {
  name:'Forrest Walk',
  price:39,
}

// This is going to be our "Grocery Cart"
var whatsInMyCart = [];


// Anytime anything comes or goes from our cart we want to run this function.
function updateCart(){
  var subtotal = 0;
  var html = "";


  // Loop over every item that is in our cart and add to our subtotal.
  whatsInMyCart.forEach(function(shirt){
    subtotal+=shirt.price;

    // Build up our HTML so that it can go in the cart.
    html+= ` 
      <div class="item"><h3>${shirt.name} <span>$${shirt.price}</span></h3></div>
     `
  })

  // Put the subtotal into our subtotal box
  subtotalBox.innerHTML = subtotal;

  // Calculate our total and store in a total variable. 
  var total = subtotal*1.065;

  // Put the total into our total box
  totalBox.innerHTML = total.toFixed(2);

  // Add the list of items into our box.
  htmlBox.innerHTML = html;
}



// This happens when the blue add to cart button is clicked
buttonBlue.addEventListener('click',function(){
  whatsInMyCart.push(blueShirt);
  updateCart();
})


// This happens when the pink add to cart button is clicked
buttonPink.addEventListener('click',function(){
  whatsInMyCart.push(pinkShirt);
  updateCart();
})


// This happens when the orange add to cart button is clicked
buttonOrange.addEventListener('click',function(){
  whatsInMyCart.push(orangeShirt);
  updateCart();
})


// When the show button cart is clicked either show the cart or hide it.
showButton.addEventListener('click',function(){
  if(isCartShowing === false)
  {
    prices.style.display = "block";
    isCartShowing = true;
  } else {
    prices.style.display = "none";
    isCartShowing = false;
  }
})
