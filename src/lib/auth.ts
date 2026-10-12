/**
 * This function will => get the cookie from https req
 *  will query the db for user id of that hashed session token to return user
 * 
 * will throw error on => session token not present,expired token or no session in db 
 */

import { cookies } from "next/headers";
import { createHash } from "node:crypto";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken")?.value;

  if (!sessionToken) {
    return null;
  }
  
  //with the sessiontoken we have,let's hash it 
  const tokenHash = createHash("sha256")
    .update(sessionToken)
    .digest("hex");
 
    //now check if with the sessions from the db
  const session = await prisma.session.findUnique({
    where: { tokenHash },
    select: {
      expiresAt: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  
  //if we don't jave session from db or session exprired
  if (!session || session.expiresAt <= new Date()) {
    return null;
  }

  return session.user;
}
