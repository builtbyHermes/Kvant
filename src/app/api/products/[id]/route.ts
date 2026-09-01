import { NextResponse } from "next/server";
import { getProductById } from "@/data/products";

type ProductRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: ProductRouteContext
) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return NextResponse.json(
      {
        error: "Product not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(product);
}

export async function PATCH(
  request: Request,
  { params }: ProductRouteContext
) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return NextResponse.json(
      {
        error: "Product not found",
      },
      {
        status: 404,
      }
    );
  }

  const body = await request.json();

  const updatedProduct = {
    ...product,
    ...body,
    id: product.id,
  };

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: Request,
  { params }: ProductRouteContext
) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return NextResponse.json(
      {
        error: "Product not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    message: "Product deleted successfully",
    product,
  });
}