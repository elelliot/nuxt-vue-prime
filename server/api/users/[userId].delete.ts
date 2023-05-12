export default defineEventHandler(async (event: any) => {
    const prisma = await getDB();
    const { userId }  = event.context.params
    return prisma.user.delete({where: { id:  Number(userId) }});
  });
  