module.exports = (app)=>{
    const controller = require('./controller') 
    const controller2 = require('./controller2') 
    const controller3 = require('./controller3')

    //Criar um novo usuario

    app.post('/profi',controller.create)

    //Busca de todos os uruarios

    app.post('/profi/search',controller2.findAll)

    app.post('/profi/login',controller3.Token)

//    app.put('/usuarios',controller.update)

//    app.delete('/usuarios',controller.remove)
}