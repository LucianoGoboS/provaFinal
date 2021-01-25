module.exports = (app)=>{
    const controller = require('./controller') 
    const controller2 = require('./controller2')

    //Criar um novo usuario

    app.post('/pedmat',controller.create)

    app.post('/pedmat/search',controller2.findOne)

    app.put('/pedmat',controller.update)

    app.delete('/pedmat',controller.remove)

}