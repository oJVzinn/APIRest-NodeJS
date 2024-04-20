import instance from './app.js' 

const port = 3000

//Liga o servidor HTTP
instance.listen(port, ()=>{
    console.log('Servidor nodeJS ligado com sucesso!')
})
