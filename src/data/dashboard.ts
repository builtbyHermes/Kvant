export const dashboardData = {
  stats: [
    {
      label: "Total Revenue",
      value: "$84,240",
      change: "+12.5%",
    },
    {
      label: "Orders",
      value: "1,284",
      change: "+8.2%",
    },
    {
      label: "Customers",
      value: "3,842",
      change: "+14.6%",
    },
    {
      label: "Conversion Rate",
      value: "6.8%",
      change: "+2.4%",
    },
  ],

  chart: {
    total: "$84,240",
    data: [42, 58, 48, 72, 64, 82, 76, 91, 84, 96, 88, 100],
  },

  orders: [
    {
      id: "#KV-1024",
      customer: "Alex Morgan",
      product: "Analytics Pro",
      amount: "$249.00",
      status: "Completed",
    },
    {
      id: "#KV-1023",
      customer: "Sarah Wilson",
      product: "Business Plan",
      amount: "$149.00",
      status: "Completed",
    },
    {
      id: "#KV-1022",
      customer: "Daniel Smith",
      product: "Analytics Pro",
      amount: "$249.00",
      status: "Pending",
    },
    {
      id: "#KV-1021",
      customer: "Emma Davis",
      product: "Starter Plan",
      amount: "$79.00",
      status: "Completed",
    },
  ],
};

export async function getDashboardData() {
  return dashboardData;
}