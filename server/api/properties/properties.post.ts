import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event: any) => {
  const { name, email, password } = await readBody(event);
  let user: Prisma.UserCreateInput;

  const prisma = await getDB();
  user = {
    name,
    email,
    password,
  };

  //To do: Handle "Email already used" scenario
  return prisma.user.create({
    data: user,
  });
});
