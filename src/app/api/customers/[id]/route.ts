import { NextResponse } from "next/server";
import { getCustomerById } from "@/data/customers";

type CustomerRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: CustomerRouteContext
) {
  const { id } = await params;

  const customer = await getCustomerById(Number(id));

  if (!customer) {
    return NextResponse.json(
      {
        error: "Customer not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(customer);
}

export async function PATCH(
  request: Request,
  { params }: CustomerRouteContext
) {
  const { id } = await params;

  const customer = await getCustomerById(Number(id));

  if (!customer) {
    return NextResponse.json(
      {
        error: "Customer not found",
      },
      {
        status: 404,
      }
    );
  }

  const body = await request.json();

  const updatedCustomer = {
    ...customer,
    ...body,
    id: customer.id,
  };

  return NextResponse.json(updatedCustomer);
}

export async function DELETE(
  request: Request,
  { params }: CustomerRouteContext
) {
  const { id } = await params;

  const customer = await getCustomerById(Number(id));

  if (!customer) {
    return NextResponse.json(
      {
        error: "Customer not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    message: "Customer deleted successfully",
    customer,
  });
}