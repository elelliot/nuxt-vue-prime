import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event: any) => {
  const { userId }  = event.context.params
  const { name, email, password } = await readBody(event);
  let user: Prisma.UserUpdateInput;
  const saltRounds = 10;

  const hashPass = await bcrypt.hash(password, saltRounds)
  const prisma = await getDB();
  user = {
    name,
    email,
    password: hashPass,
  };

  return prisma.user.update({
    data:user,
    where:{
      id: Number(userId)
    }
  });
});
