import { NextResponse } from "next/server";
import { getCustomers } from "@/data/customers";

export async function GET() {
  const customers = await getCustomers();

  return NextResponse.json(customers);
}

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, company, status } = body;

  if (!name || !email || !company || !status) {
    return NextResponse.json(
      {
        error: "Missing required customer fields",
      },
      {
        status: 400,
      }
    );
  }

  const customer = {
    id: Date.now(),
    name,
    email,
    company,
    status,
  };

  return NextResponse.json(customer, {
    status: 201,
  });
}