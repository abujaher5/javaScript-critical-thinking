// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

// way to get subtotal amount with available product
const subtotal = cartItems.reduce((subtotal, product) => {
  return subtotal + product.price * product.quantity;
}, 0);

// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorers = players.reduce((bestPlayer, player) => {
  //   console.log(bestPlayer, player);
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }
  return player;
});
// no initial bestScorer
console.log(bestScorers);

const bestScorer = players.reduce((bestPlayer, player) => {
  //   console.log(bestPlayer, player);
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }

  return player;
}, players[0]);
// initially first player jamal buiyan let the bestScorer

console.log(bestScorer);
