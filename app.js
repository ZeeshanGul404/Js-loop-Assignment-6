let cart = [1200, 500, 800]; // product store karne ke liye array

let total = 0; // total store ke liye variable
for (let i = 0; i < cart.length; i++) {
  // loop chalaya or array ki length check ki
  total = total + cart[i]; // each product ko total me add kiya
}

console.log(total);
