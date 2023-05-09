import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event: any) => {
  const { name, email, whatsapp } = await readBody(event);
  let user : Prisma.UserCreateInput;
  const prisma = await getDB();
  user = {
    name,
    contactInfo:{
      create:{
        email,
        whatsapp
      }
    }
  }
  return prisma.user
    .create({
      data: user,
    })
});
