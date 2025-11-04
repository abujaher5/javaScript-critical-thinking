const products = [
  {
    id: 1,
    productName: "Wireless Earbuds",
    category: "Electronics",
    price: 49.99,
    rating: 4.5,
    stock: 120,
  },
  {
    id: 2,
    productName: "Smartphone",
    category: "Electronics",
    price: 699.99,
    rating: 4.7,
    stock: 50,
  },
  {
    id: 3,
    productName: "Bluetooth Speaker",
    category: "Gadget",
    price: 29.99,
    rating: 4.3,
    stock: 200,
  },
  {
    id: 4,
    productName: "Smartwatch",
    category: "Gadget",
    price: 99.99,
    rating: 4.4,
    stock: 80,
  },
  {
    id: 5,
    productName: "Laptop",
    category: "Electronics",
    price: 999.99,
    rating: 4.8,
    stock: 30,
  },
  {
    id: 6,
    productName: "Power Bank",
    category: "Gadget",
    price: 25.99,
    rating: 4.2,
    stock: 150,
  },
  {
    id: 7,
    productName: "Gaming Mouse",
    category: "Electronics",
    price: 39.99,
    rating: 4.6,
    stock: 90,
  },
];

// getting top 3 electronics product name

const topElectronicsProducts = products
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map(
    (item) => ({
      name: item.productName,
    })
    // (item) => {
    //   return { name: item.productName };
    // } when return value is multi line
  );

console.log(topElectronicsProducts);
