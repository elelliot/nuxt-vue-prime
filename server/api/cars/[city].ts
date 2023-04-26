export default defineEventHandler((event:any) => {
    // return `Hello ${event.node.req.method}`
    return `Hello ${event.context.params.city}`
  })
  