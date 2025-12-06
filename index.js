const jsonServer=require('json-server')

const noteServer=jsonServer.create()
const middleware=jsonServer.defaults()
const route=jsonServer.router('db.json')
const PORT=process.env.PORT || 3000

noteServer.use(middleware)
noteServer.use(route)

noteServer.listen(PORT,()=>{
    console.log(`sererv connected at port ${PORT}`);
    
})