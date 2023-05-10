export default defineEventHandler(async (event: any) => {
  const prisma = await getDB();
  const { userId }  = event.context.params
  return prisma.user.findUniqueOrThrow({where: { id:  Number(userId) }});
});
