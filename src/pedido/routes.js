module.exports = (app)=>{
    const controller = require('./controller') 
    const controller2 = require('./controller2') 

    //Criar um novo usuario

    app.post('/pedido',controller.create)

    app.post('/pedido/search',controller2.findAll)

    app.delete('/pedido',controller.remove)

    app.delete('/pedido/search',controller2.remove)

    app.put('/pedido',controller.update)


}