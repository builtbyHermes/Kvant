export const customers = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@example.com",
    company: "Northstar",
    status: "Active",
    spent: 1240,
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    company: "Vertex Labs",
    status: "Active",
    spent: 860,
  },
  {
    id: 3,
    name: "Daniel Smith",
    email: "daniel@example.com",
    company: "Atlas",
    status: "Inactive",
    spent: 420,
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma@example.com",
    company: "Summit",
    status: "Active",
    spent: 1680,
  },
];

export async function getCustomers() {
  return customers;
}

export async function getCustomerById(id: number) {
  return customers.find((customer) => customer.id === id);
}