import  { prisma }  from "../config/databse.js";
import { User } from "@prisma/client";

export async function getUserByEmail(email: string) {
    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  }