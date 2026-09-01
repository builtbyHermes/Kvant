import { NextResponse } from "next/server";
import { getDashboardData } from "@/data/dashboard";

export async function GET() {
  const data = await getDashboardData();

  return NextResponse.json(data);
}