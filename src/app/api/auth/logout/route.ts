
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get("sessionToken")?.value;

    // No session cookie: already logged out
    if (!sessionToken) {
      return NextResponse.json({
        message: "Logged out successfully.",
      });
    }

    // Hash the token to find the stored session
    const tokenHash = createHash("sha256")
      .update(sessionToken)
      .digest("hex");

    // Invalidate the session in the database
    await prisma.session.deleteMany({
      where: { tokenHash },
    });

    // Clear the browser cookie
    const response = NextResponse.json({
      message: "Logged out successfully.",
    });

    response.cookies.set("sessionToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { message: "Unable to log out. Please try again." },
      { status: 500 }
    );
  }
}
