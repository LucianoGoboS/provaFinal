module.exports = (app)=>{
    const controller = require('./controller')
    const controller2 = require('./controller2')
    const controller3 = require('./controller3')    

    //Criar um novo usuario

    app.post('/usuarios',controller.create)

    //Busca de todos os uruarios

    app.get('/usuarios',controller.findAll)

    app.post('/usuarios/search',controller2.findAll)

    app.post('/usuarios/search2',controller3.findAll)    

    app.put('/usuarios',controller.update)

    app.delete('/usuarios',controller.remove)

}