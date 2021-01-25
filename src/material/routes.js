module.exports = (app)=>{
    const controller = require('./controller')
    const controller2 = require('./controller2')
    const controller3 = require('./controller3')

    app.post('/material',controller.create)

    app.get('/material',controller.findAll)

    app.post('/material/search',controller2.findOne)

    app.post('/material/search2',controller3.findAll)

    app.put('/material',controller.update)
  
}