import { PrismaClient, Prisma } from '@prisma/client'


export default defineEventHandler(async(event:any) => {
    const {name, source} = await readBody(event)
    // console.log(name, source)
    return `addUser body ${name} and ${source}`

    // const prisma = new PrismaClient()
    // prisma.user.create({
    //     data: {
    //         name: values.name,
    //         source: values.source,
    //     },
    // }).then(() => {
    //     showNotification('success', 'Data successfully validated', 'Data has been sent correctly')
    //     resetForm();
    // }).catch(() => {
    //     showNotification('error', 'Error', "There was an issue creating the user pls try again.")
    // })
})