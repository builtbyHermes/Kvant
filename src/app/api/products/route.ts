import { NextResponse } from "next/server";
import { getProducts } from "@/data/products";

export async function GET() {
  const products = await getProducts();

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  const { name, category, price, status } = body;

  if (!name || !category || price === undefined || !status) {
    return NextResponse.json(
      {
        error: "Missing required product fields",
      },
      {
        status: 400,
      }
    );
  }

  const product = {
    id: Date.now(),
    name,
    category,
    price,
    status,
  };

  return NextResponse.json(product, {
    status: 201,
  });
}