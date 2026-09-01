// tihs is the mock array,which shall be replaced with a real DB
export const products = [
  {
    id: 1,
    name: "Analytics Pro",
    category: "Analytics",
    price: 249,
    status: "Active",
  },
  {
    id: 2,
    name: "Business Plan",
    category: "Business",
    price: 149,
    status: "Active",
  },
  {
    id: 3,
    name: "Starter Plan",
    category: "Business",
    price: 79,
    status: "Active",
  },
  {
    id: 4,
    name: "Inventory Pro",
    category: "Inventory",
    price: 199,
    status: "Inactive",
  },
];

export async function getProducts() {
  return products;
}

export async function getProductById(id: number) {
  return products.find((product) => product.id === id);
}