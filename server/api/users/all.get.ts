export default defineEventHandler(async () => {
    const prisma = await getDB();
    return prisma.user.findMany();
  });
  