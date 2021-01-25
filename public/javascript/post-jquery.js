

Materiais = {

    add: (nome2, descricao2, unidade2, valor2) => {
        console.log('passou aqui agora')
        //        var comment = $(input).parent()  
        var t = {}
        t.nome = nome2
        t.descricao = descricao2
        t.unidade = unidade2
        t.valor = valor2
        console.log(JSON.stringify(t))

        $.ajax({
            type: 'POST',
            url: '/material',
            data: t,
            dataType: 'json',
            success: (data) => {
                alert('dados inseridos com sucesso')
            },
        })

        return false
    },

    findAll: () => {
        $.ajax({
            type: 'GET',
            url: '/material',
            success: (data) => {
                $("#comments6").empty()
                Materiais.template4(data)
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })
    },

    findAll2: (data,tipoPiso,area,cpf,titulo) => {
        $.ajax({
            type: 'GET',
            url: '/material',
            success: (data2) => {
                Pedido.template2(data2,data,tipoPiso,area,cpf,titulo)
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })
    },    

    findAll3: (data,area,tipoP2) => {
        $.ajax({
            type: 'GET',
            url: '/material',
            success: (data2) => {
                Pedido.template6(data2,data,area,tipoP2)
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })
    },       

    findOne: (nome2) => {
        //       var comment = $(input).parent() 
        var t = {}
        //      t.nome = $(comment).children('input.nome').val()
        t.nome = nome2
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/material/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                $("#comments6").empty()
                if (data == "") {
                    alert('não tem material com este nome')
                }
                for (var material of data) {
                    Materiais.template3(material)
                }
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },

    findOne2: (tipoPiso) => {
        $.ajax({
            type: 'POST',
            url: '/pedido/search2',
            data: t,
            dataType: 'json',
            success: (data) => {
                Pedido.template(data,tipoPiso)
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },

    template: () => {

        $("#comments5").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var formulario = $('<form></form>')
            .attr('id', 'formulario')
            .attr('class', 'form1')

        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var nomeTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Nome: ')

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var nome = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'Nome do material').html('')

        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var descricaoTitulo = $('<label></label>')
            .html('Descrição: ')

        var comment5 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-75')

        var descricao = $('<input></input>')
            .attr('type', 'text').attr('id', 'descricao')
            .attr('placeholder', 'Descrição do material').html('')

        var comment6 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var unidadeTitulo = $('<label></label>')
            .html('Unidade: ')

        var comment7 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-75')

        var unidade = $('<select></select>')
            .html('')

        var unidade2 = "metro (m)"

        $(unidade).append('<option value="metro (m)" selected="selected"> metro (m) </option>');
        $(unidade).append('<option value="metro quadrado (m2)" selected="selected"> metro quadrado (m2) </option>');
        $(unidade).append('<option value="metro cúbico (m3)" selected="selected"> metro cúbico (m3) </option>');
        $(unidade).append('<option value="unidade (uni.)" selected="selected"> unidade (uni) </option>');
        $(unidade).append('<option value="kilograma (kg)" selected="selected"> kilograma (kg) </option>');
        $(unidade).append('<option value="hora (H)" selected="selected"> hora (H)');


        var comment10 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var valorTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Valor (R$/un.): ')

        var comment11 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var valor = $('<input></input>')
            .attr('type', 'number').attr('mask', '99999.99').attr('step', '0.01').attr('placeholder', '999999.99')
            

        var comment8 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var comment9 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var botao = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Inserir')

        var botao2 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Cancelar')

        $(unidade).on('change', (event) => {
            unidade2 = $(unidade, 'option:selected').val()
        })

        $(botao).on('click', (event) => {
            if ($(nome).val() === '') {
                alert('O nome do material deve ser preenchido')
                $(nome).focus()
            } else {
                if ($(descricao).val() === '') {
                    alert('A descrição do material deve ser preenchida')
                    $(descricao).focus()
                } else {
                    if ($(valor).val() === '') {
                        alert('O valor deve estar preenchido')
                        $(valor).focus()
                    } else {
                        var valor2 = $(valor).val()
                        //        valor2.toFixed(2)
                        if (valor2 <= 0.00) {
                            alert('O valor do produto não pode ser zero nem negativo')
                            $(valor).focus()
                        } else {
                            var nome2 = $(nome).val()
                            var descricao2 = $(descricao).val()
                            Materiais.add(nome2, descricao2, unidade2, valor2)
                        }

                    }
                }
            }
        })

        $(botao2).on('click', (event) => {
            $('#comments5').empty()
        })

        $(comment2).append(nomeTitulo)
        $(comment3).append(nome)
        $(comment4).append(descricaoTitulo)
        $(comment5).append(descricao)
        $(comment6).append(unidadeTitulo)
        $(comment7).append(unidade)
        $(comment10).append(valorTitulo)
        $(comment11).append(valor)
        $(comment8).append(botao)
        $(comment9).append(botao2)
        $(comment).append(comment2)
        $(comment).append(comment3)
        $(comment).append(comment4)
        $(comment).append(comment5)
        $(comment).append(comment6)
        $(comment).append(comment7)
        $(comment).append(comment10)
        $(comment).append(comment11)
        $(comment).append(comment8)
  //      $(comment).append(formulario)
        $(comment).append(comment9)
        $("#comments5").append(comment)
    },

    template2: () => {

        $("#comments5").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var nomeTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Busca por nome: ')

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-40')

        var nome = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'Nome do material').html('')

        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-35')

        var botao = $('<input></input>')
            .attr('class', 'botao')
            .attr('type', 'submit').attr('value', 'Buscar')

        $(botao).on('click', (event) => {
            if ($(nome).val() === '') {
                alert('O nome do material deve ser preenchido')
                $(nome).focus()
            } else {
                var nome2 = $(nome).val()
                Materiais.findOne(nome2)
            }
        })

        $(comment2).append(nomeTitulo)
        $(comment3).append(nome)
        $(comment4).append(botao)
        $(comment).append(comment2)
        $(comment).append(comment3)
        $(comment).append(comment4)
        $("#comments5").append(comment)
    },

    template3: (data) => {

        $("#comments6").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var id = $('<p></p>')
            .attr('id', 'id').html('Id: ' + data.id)

        var nome = $('<p></p>')
            .attr('id', 'nome').html('Nome: ' + data.nome)

        var descricao = $('<p></p>')
            .attr('id', 'descricao')
            .html('Descrição: ' + data.descricao)

        var unidade = $('<p></p>')
            .attr('id', 'unidade')
            .html('Unidade: ' + data.unidade)


        var valor = $('<p></p>')
            .attr('id', 'valor')
            .html('Valor (R$/unidade): ' + data.valor)

        var separador = $('<p></p>')
            .attr('id', 'valor')
            .html('------------------------------------------------------------------------')


        var botao2 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Cancelar')


        $(botao2).on('click', (event) => {
            $('#comments5').empty()
        })

        $(comment).append(id)
        $(comment).append(nome)
        $(comment).append(descricao)
        $(comment).append(unidade)
        $(comment).append(valor)
        $(comment).append(separador)
        $(comment).append(botao2)
        $("#comments6").append(comment)
    },

    template4: (data) => {

        $("#comments5").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var nomeTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Id e nome do produto: ')

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-40')

        var nome = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'Nome do material').html('')

        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-35')

        var botao = $('<input></input>')
            .attr('class', 'botao')
            .attr('type', 'submit').attr('value', 'Buscar')

        var itens = $('<select></select>')
            .html('')

        $.each(data, (i, data) => {
            $(itens).append($('<option>', {
                value: data.id,
                text: data.id + ' ' + data.nome
            }))
        })
        var item = 0
        $(itens).on('change', (event) => {
            item = $(itens, 'option:selected').val()
        })

        var material1 = data[0].id

        $(botao).on('click', (event) => {
            if(item!=0){
                item=item-1
            }
            Materiais.template5(data[item])
        }
        )

        $(comment2).append(nomeTitulo)
        $(comment3).append(itens)
        $(comment4).append(botao)
        $(comment).append(comment2)
        $(comment).append(comment3)
        $(comment).append(comment4)
        $("#comments5").append(comment)
    },

    template5: (data) => {

        console.log(JSON.stringify(data))

        $("#comments5").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var formulario = $('<form></form>')
            .attr('id', 'formulario')
            .attr('class', 'form1')

        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var nomeTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Nome: ')

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var nome = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome').attr('value', data.nome)
            .html('')

        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var descricaoTitulo = $('<label></label>')
            .html('Descrição: ')

        var comment5 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-75')

        var descricao = $('<input></input>')
            .attr('type', 'text').attr('id', 'descricao').attr('value', data.descricao)
            .html('')

        var comment6 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var unidadeTitulo = $('<label></label>')
            .html('Unidade: ')

        var comment7 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-75')

        var unidade = $('<select></select>')
            .html('')

        var unidade2 = "metro (m)"

        $(unidade).append('<option value="metro (m)" selected="selected"> metro (m) </option>');
        $(unidade).append('<option value="metro quadrado (m2)" selected="selected"> metro quadrado (m2) </option>');
        $(unidade).append('<option value="metro cúbico (m3)" selected="selected"> metro cúbico (m3) </option>');
        $(unidade).append('<option value="unidade (uni.)" selected="selected"> unidade (uni) </option>');
        $(unidade).append('<option value="kilograma (kg)" selected="selected"> kilograma (kg) </option>');

        $(unidade).val(data.unidade).change();

        var comment10 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var valorTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Valor (R$/un.): ')

        var comment11 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var valor = $('<input></input>')
            .attr('type', 'number').attr('mask', '99999.99').attr('step', '0.01')
            .attr('value', data.valor).html('')

        var comment8 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var comment9 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var botao = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Inserir')

        var botao2 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Cancelar')

        $(unidade).on('change', (event) => {
            unidade2 = $(unidade, 'option:selected').val()
        })

        $(botao).on('click', (event) => {
            if ($(nome).val() === '') {
                alert('O nome do material deve ser preenchido')
                $(nome).focus()
            } else {
                if ($(descricao).val() === '') {
                    alert('A descrição do material deve ser preenchida')
                    $(descricao).focus()
                } else {
                    if ($(valor).val() === '') {
                        alert('O valor deve estar preenchido')
                        $(valor).focus()
                    } else {
                        var valor2 = $(valor).val()
                        //        valor2.toFixed(2)
                        if (valor2 <= 0.00) {
                            alert('O valor do produto não pode ser zero nem negativo')
                            $(valor).focus()
                        } else {
                            var id2 = data.id;
                            var nome2 = $(nome).val()
                            var descricao2 = $(descricao).val()
                            Materiais.update(id2, nome2, descricao2, unidade2, valor2)
                        }

                    }
                }
            }

        })

        $(botao2).on('click', (event) => {
            $('#comments5').empty()
        })

        $(comment2).append(nomeTitulo)
        $(comment3).append(nome)
        $(comment4).append(descricaoTitulo)
        $(comment5).append(descricao)
        $(comment6).append(unidadeTitulo)
        $(comment7).append(unidade)
        $(comment10).append(valorTitulo)
        $(comment11).append(valor)
        $(comment8).append(botao)
        $(comment9).append(botao2)
        $(formulario).append(comment2)
        $(formulario).append(comment3)
        $(formulario).append(comment4)
        $(formulario).append(comment5)
        $(formulario).append(comment6)
        $(formulario).append(comment7)
        $(formulario).append(comment10)
        $(formulario).append(comment11)
        $(formulario).append(comment8)
        $(comment).append(formulario)
        $(comment).append(comment9)
        $("#comments5").append(comment)
    },

    update: (id2, nome2, descricao2, unidade2, valor2) => {

        //      var comment = $(button).parent()

        var t = {}
        t.id = id2
        t.nome = nome2
        t.descricao = descricao2
        t.unidade = unidade2
        t.valor = valor2

        $.ajax({
            type: 'PUT',
            url: '/material',
            data: t,
            success: (data) => {
                //quando der certo
                //      $(comment).children('textarea').prop('disabled', true)
                alert('habilidade para a vaga alterada com sucesso')
                //        $(comment).children('button.edit').show()
                //        $(comment).children('button.save').hide()
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    }

}

Pedido = {

    add: (data3,titulo,valor,idUser) => {
        console.log('passou aqui agora') 
        var t = {}
        t.nome = titulo
        t.valor = valor
        t.userId =idUser 

        console.log(JSON.stringify(t))

        $.ajax({
            type: 'POST',
            url: '/pedido',
            data: t,
            dataType: 'json',
            success: (data) => {
                alert('pedido inserido com sucesso')
                Pedmat.add(data3,data)
            },
        })

        return false
    },

    findOne: (data) => {
        console.log(JSON.stringify(data))
        var t = {}
        t.userId=data[0].id
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/pedido/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                $("#comments9").empty()
                for (var pedido of data) {
                    Pedido.template4(pedido)
                }
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },    

    findOne2: (data) => {
        console.log(data)
        var t = {}
        t.userId=data
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/pedido/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                $("#comments9").empty()
                $("#comments10").empty()
                for (var pedido of data) {
                    Pedido.template4(pedido)
                }
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },   
    
    findOne3: (data) => {
        console.log(data)
        var t = {}
        t.userId=data
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/pedido/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                    if(data==''){
                       Pedido.remove2(t)
                    }else{
                        for (var pedido of data) {
                            console.log(JSON.stringify(pedido))
                            Pedmat.remove(pedido)
                        }
                        for (var pedido of data) {
                            console.log(JSON.stringify(pedido))
                            Pedido.remove2(pedido)
                        }
                        User.remove(t)
                    }

 
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },      

    remove: (data,data2) => {
        var t = {}
        t.id = data
        console.log('aqui esta em remover usuario')
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'DELETE',
            url: '/pedido',
            data: t,
            success: (data) => {
                alert('Pedidos do usuario deletados com sucesso')
                $("#comments9").empty()
                $("#comments10").empty()
                Pedido.findOne2(data2)
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    },

    remove2: (data) => {
        var t = {}
        t.pedidoId = data.id
        t.userId=data.userId
        console.log('aqui esta em remover pedido e itens de pedido')
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'DELETE',
            url: '/pedido/search',
            data: t,
            success: (data) => {
                alert('Pedidos do usuario deletados com sucesso')
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    },    
 
    template: (tipoPiso)=>{
        
        $("#comments").empty()
        $("#comments1").empty()
        $("#comments2").empty()
        $("#comments3").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var formulario = $('<form></form>')
            .attr('id', 'formulario')
            .attr('class', 'form1')
        
        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var areaTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Área (paredes m2) : ').css({"color":"rgb(253, 236, 0)"})

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var area = $('<input></input>')
            .attr('type', 'number').attr('mask', '99999.99').attr('step', '0.01').attr('placeholder', '999999.99')
            .css({"width": "100%","padding": "12px","border": "1px solid #ccc","border-radius": "4px","resize": "vertical"})

        var comment8 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var tituloTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Título : ').css({"color":"rgb(253, 236, 0)"})

        var comment9 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-75')

        var titulo = $('<input></input>')
            .attr('type', 'text').attr('id', 'titulo')
            .attr('placeholder', 'Título: ex(casa, banheiro, sala, casa_X, etc)').html('').css({"width": "100%","padding": "12px","border": "1px solid #ccc","border-radius": "4px","resize": "vertical"})


        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var cpfTitulo = $('<label></label>')
            .html('CPF: ').css({"color":"rgb(253, 236, 0)"})

        var comment5 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-75')

        var cpf = $('<input></input>')
            .attr('type', 'text').attr('id', 'cpf')
            .attr('placeholder', 'CPF (só numeros)').attr('maxlength','11').attr('onkeypress','return event.charCode >= 48 && event.charCode <= 57')
            .html('').css({"width": "100%","padding": "12px","border": "1px solid #ccc","border-radius": "4px","resize": "vertical"})

        var comment6 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var comment7 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var botao = $('<button></button>')
            .attr('class','botao').html('Confirmar').css({"width":"100%","background-color":" #4CAF50","color": "white",
            "padding": "12px","margin": "6px 0px","border": "none","border-radius": "4px",
            "cursor": "pointer","resize": "vertical"})

        var botao2 = $('<button></button>')
            .attr('class','botao').html('Cancelar').css({"width":"100%","background-color":" #eb5122","color": "white",
            "padding": "12px","margin": "6px 0px","border": "none","border-radius": "4px",
            "cursor": "pointer","resize": "vertical"})

        var comment10 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var paragrafoAviso = $('<p></p>')
            .html('Não tem cadastro? ').css({"color":"rgb(253, 236, 0)"})            

        var aviso = $('<a></a>')
            .attr('href','/cliente')
            .html('Clique aqui!').css({"color":"rgb(253, 236, 0)"})

        var comment11 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')    

        var paragrafoAviso2 = $('<p></p>')
            .html('Alterar cadastro? ').css({"color":"rgb(253, 236, 0)"})            

        var aviso2 = $('<a></a>')
            .attr('href','/alterar_cliente')
            .html('Clique aqui!').css({"color":"rgb(253, 236, 0)"})    

        $(botao).on('click', (event) => {
                if($(titulo).val()===''){
                   alert('Você deve colocar um titulo na sua proposta')
                }else{
                    if($(area).val()<=0.0 || $(area).val()==='' ){ 
                        alert('O valor da area não pode ser menor ou igual a 0')
                        $(area).focus
                     }else{
                        if($(cpf).val()===''){
                           alert('O preenchimento do CPF é obrigatorio')
                           $(cpf).focus()
                        }else{
                            User.findOne4(tipoPiso,$(area).val(),$(cpf).val(),$(titulo).val())
                        }   
                     }
                }

                $('#comments').empty()
                $('#comments1').empty()
                $('#comments2').empty()
                $('#comments3').empty()
            })   


        $(botao2).on('click', (event) => {
            $('#comments').empty()
            $('#comments1').empty()
            $('#comments2').empty()
            $('#comments3').empty()
        })    

        $(comment8).append(tituloTitulo)
        $(comment9).append(titulo)
        $(comment2).append(areaTitulo) 
        $(comment3).append(area) 
        $(comment4).append(cpfTitulo) 
        $(comment5).append(cpf)   
        $(comment6).append(botao) 
        $(comment7).append(botao2) 
        $(paragrafoAviso).append(aviso) 
        $(comment10).append(paragrafoAviso)
        $(paragrafoAviso2).append(aviso2) 
        $(comment11).append(paragrafoAviso2)        
        $(comment).append(comment8)
        $(comment).append(comment9)
        $(comment).append(comment2)
        $(comment).append(comment3)
        $(comment).append(comment4)
        $(comment).append(comment5)
        $(comment).append(comment6)
        $(comment).append(comment7)
        $(comment).append(comment10)
        $(comment).append(comment11)
   //     $(comment).append(formulario)  
        
        if(tipoPiso==1){
            $("#comments").append(comment)
        }else{
            if(tipoPiso==2){
                $("#comments1").append(comment) 
            }else{
                if(tipoPiso==3){
                    $("#comments2").append(comment)  
                }else{
                    $("#comments3").append(comment) 
                }
            }
        }
    },

    template2: (data2,data,tipoPiso,area,cpf,titulo) => {
        console.log(cpf)
        console.log(area)
        console.log(tipoPiso)
        console.log(titulo)
        console.log(JSON.stringify(data))
        console.log(JSON.stringify(data2))
        var cservente=0.0
        var cpedreiro=0.0
        var ccimbranco=0.0
        var cargcolante=0.0
        var cceresmalta=0.0 
        var cvalor=0.0        
        var servente=0.0
        var pedreiro=0.0
        var cimbranco=0.0
        var argcolante=0.0
        var ceresmalta=0.0 
        var valor=0.0
//---------------------------------------------------------------------------------------------------------
//     Consumo materiais por unidade comercializável
//---------------------------------------------------------------------------------------------------------
       cservente=Math.round(area*0.42)
       cpedreiro=Math.round(area*0.69)
       ccimbranco=Math.round(area*0.25/1.0)
       cargcolante=Math.round(area*4.40/10.00)
       cceresmalta=Math.round(area*1.1/(0.6*0.6))
//---------------------------------------------------------------------------------------------------------
//     Fim do consumo materiais por unidade comercializável
//---------------------------------------------------------------------------------------------------------


        servente=data2[0].valor*cservente  
        pedreiro=data2[1].valor*cpedreiro
        cimbranco=data2[2].valor*ccimbranco*1.0
        argcolante=data2[3].valor*cargcolante*10.0 
        var tipoceramica=''
        var descricaoC=''
        if(tipoPiso==1){
            ceresmalta=data2[4].valor*cceresmalta*(0.6*0.6)
            tipoceramica=data2[4].id
            descricaoC=data2[4].descricao
        }else{
            if(tipoPiso==2){
                ceresmalta=data2[5].valor*cceresmalta*(0.6*0.6)
                tipoceramica=data2[5].id
                descricaoC=data2[5].descricao
            }else{
                if(tipoPiso==3){
                    ceresmalta=data2[6].valor*cceresmalta*(0.6*0.6)
                    tipoceramica=data2[6].id
                    descricaoC=data2[6].descricao
                }else{
                    ceresmalta=data2[7].valor*cceresmalta*(0.6*0.6)
                    tipoceramica=data2[7].id
                    descricaoC=data2[7].descricao
                }
            }
        }
        

   
        var data3 = {}
        
        data3=[
            {
                "nome": titulo,
                "unidade": "horas (H)",
                "quantidade":cservente,
                "preco":servente,
                "materialId": data2[0].id  
            }, 
            {
                "nome": titulo,
                "unidade": "horas (H)",
                "quantidade":cpedreiro,
                "preco":pedreiro,
                "materialId": data2[1].id  
            },
            {
                "nome": titulo,
                "unidade": "saco (10kg)",
                "quantidade":ccimbranco,
                "preco":cimbranco,
                "materialId": data2[2].id  
            },
            {
                "nome": titulo,
                "unidade": "saco (10kg)",
                "quantidade":cargcolante,
                "preco":argcolante,
                "materialId": data2[3].id  
            },
            {
                "nome": titulo,
                "unidade": "unidade",
                "quantidade":cceresmalta,
                "preco":ceresmalta,
                "materialId": tipoceramica   
            }      
        ]
        
        console.log(JSON.stringify(data3))
  
        valor=servente+pedreiro+cimbranco+argcolante+ceresmalta      

        if (confirm('Orçamento para '+titulo+':\n'+data2[0].descricao+'  '+data3[0].quantidade+' '+data3[0].unidade+' Preço: R$'+data3[0].preco.toFixed(2)+'\n'+data2[1].descricao+'  '+data3[1].quantidade+' '+data3[1].unidade+' Preço: R$'+data3[1].preco.toFixed(2)+'\n'+data2[2].descricao+'  '+data3[2].quantidade+' '+data3[2].unidade+' Preço: R$'+data3[2].preco.toFixed(2)+'\n'+data2[3].descricao+'  '+data3[3].quantidade+' '+data3[3].unidade+' Preço: R$'+data3[3].preco.toFixed(2)+'\n'+descricaoC+'  '+data3[4].quantidade+' '+data3[4].unidade+' Preço: R$'+data3[4].preco.toFixed(2)+'\n'+'Valor total: R$ '+valor.toFixed(2) )) {
            Pedido.add(data3,titulo,valor,data[0].id)
        } 

  //      
    },

    template3: () => {

        $("#comments8").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var cpfTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('CPF do cliente: ')

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-40')

        var cpf = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome').attr('maxlength','11').attr('onkeypress','return event.charCode >= 48 && event.charCode <= 57')
            .attr('placeholder', 'CPF do cliente (só números)').html('')

        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-35')

        var botao = $('<input></input>')
            .attr('class', 'botao')
            .attr('type', 'submit').attr('value', 'Buscar')

        $(botao).on('click', (event) => {
            if ($(nome).val() === '') {
                alert('O CPF do cliente deve ser preenchido')
                $(nome).focus()
            } else {
                var cpf2 = $(cpf).val()
                User.findOne5(cpf2)
            }
        })

        $(comment2).append(cpfTitulo)
        $(comment3).append(cpf)
        $(comment4).append(botao)
        $(comment).append(comment2)
        $(comment).append(comment3)
        $(comment).append(comment4)
        $("#comments8").append(comment)
    },

    template4: (data) => {


        console.log(JSON.stringify(data))

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')

        var id = $('<p></p>')
            .attr('id', 'id').html('Id: ' + data.id)

        var nome = $('<p></p>')
            .attr('id', 'nome').html('Nome: ' + data.nome)

        var valor = $('<p></p>')
            .attr('id', 'valor')
            .html('Valor:R$ ' + data.valor.toFixed(2))

        var datadia = $('<p></p>')
            .attr('id', 'data')
            .html('Data: ' + data.createdAt)

        var separador = $('<p></p>')
            .attr('id', 'valor')
            .html('------------------------------------------------------------------------')




        var botao = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Mostrar itens')

          


        $(botao).on('click', (event) => {
            Pedmat.findOne(data.id,data.valor)
        })

        var botao2 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Cancelar')

          


        $(botao2).on('click', (event) => {
            $('#comments9').empty()
        })     

        var botao3 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Deletar').css({"background-color":" #f70606"})

        $(botao3).on('click', (event) => {
            Pedido.remove(data.id,data.userId)
        })           
           

        $(comment).append(nome)
        $(comment).append(valor)
        $(comment).append(datadia)
        $(comment).append(botao)
        $(comment).append(botao2)
        $(comment).append(botao3)
        $(comment).append(separador)        
        $("#comments9").append(comment)        
    },

    template5: (data,data2) => {
      
        var comment = $('<div></div>')
        .attr('id', 'comment-'+data.id)
        .attr('class', 'container4')
        
     //   console.log(data.materiai.nome)
        var texto=''
        console.log(texto)
       var orcamento1 = $('<textarea></textarea>')
        .attr('class', 'habilidade').attr('class', 'habilidade3').attr('rows', '4').attr('cols', '105')
        .html('')  
        for (var pedmat of data) {
            texto=pedmat.materiai.nome+' '+pedmat.unidade+' '+pedmat.quantidade+' '+pedmat.preco.toFixed(2)
            $(orcamento1).append(texto+'\n')
        } 
        texto='\n Valor total R$'+data2.toFixed(2)
        $(orcamento1).append(texto+'\n')

        var nome = $('<p></p>')
            .attr('id', 'valor')
            .html('')        


        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-100')

        var nomeTitulo = $('<p></p>')
            .attr('id', 'nomeTitulo')
            .html('Nome do orçamento: '+data[0].nome)

        var comment8 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')  
            
        var nomeArea = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Area (m2): ')      

        var nomeCeramica = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Tipo do revestimento: ')            

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var area = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'entre com a area (m2)').html('')


        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-50')           

        var botao2 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Modificar').css({"background-color":"#eb5122",'width': '80%'})  

        var comment6 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-25')   
            
        var comment7 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')     
            
        var tipoP = $('<select></select>')
            .html('')

        $(tipoP).append('<option value="1" selected="selected"> tipo 1 - granite </option>');
        $(tipoP).append('<option value="2" selected="selected"> tipo 2 - carrara </option>');
        $(tipoP).append('<option value="3" selected="selected"> tipo 3 - pozolana </option>');
        $(tipoP).append('<option value="4" selected="selected"> tipo 4 - areia </option>');
  
        $(tipoP).val(pedmat.materiai.id-4).change();        
       
        tipoP2 = 1
       
        $(tipoP).on('change', (event) => {
            tipoP2 = $(tipoP, 'option:selected').val()
        })            

        var comment5 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-50')              


            
        var botao = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Deletar').css({"background-color":" #f70606",'width': '80%'})            

        $(botao2).on('click', (event) => {
            if($(area).val()===''){
                alert('O valor da area deve ser preenchido')
                $(area).focus()
            }else{
                if($(botao2).val<=0.0){
                    alert('A area nao pode ser zero ou negativa, entre com outro valor')
                    $(area).focus()
                }else{
                    Materiais.findAll3(data,area.val(),tipoP2)
                }
            }


        })      
        
        $(botao).on('click', (event) => {
            Pedido.remove(data.id,data.userId)
        }) 

        $(comment).append(orcamento1)   
        $(comment).append(nome) 
        $(comment2).append(nomeTitulo)
        $(comment8).append(nomeArea)
        $(comment3).append(area)
        $(comment6).append(nomeCeramica) 
        $(comment7).append(tipoP) 
        $(comment4).append(botao2) 
        $(comment5).append(botao)
        $(comment).append(comment2)
        $(comment).append(comment8)  
        $(comment).append(comment3) 
        $(comment).append(comment6)
        $(comment).append(comment7) 
        $(comment).append(comment4)
        $(comment).append(comment5)   
        $("#comments10").append(comment)       
    },

    template6: (data2,data,area,tipoP2) => {
        console.log(JSON.stringify(data))
        var cservente=0.0
        var cpedreiro=0.0
        var ccimbranco=0.0
        var cargcolante=0.0
        var cceresmalta=0.0 
        var cvalor=0.0        
        var servente=0.0
        var pedreiro=0.0
        var cimbranco=0.0
        var argcolante=0.0
        var ceresmalta=0.0 
        var valor=0.0
//---------------------------------------------------------------------------------------------------------
//     Consumo materiais por unidade comercializável
//---------------------------------------------------------------------------------------------------------
       cservente=Math.round(area*0.42)
       cpedreiro=Math.round(area*0.69)
       ccimbranco=Math.round(area*0.25/1.0)
       cargcolante=Math.round(area*4.40/10.00)
       cceresmalta=Math.round(area*1.1/(0.6*0.6))
//---------------------------------------------------------------------------------------------------------
//     Fim do consumo materiais por unidade comercializável
//---------------------------------------------------------------------------------------------------------


        servente=data[0].materiai.valor*cservente  
        pedreiro=data[1].materiai.valor*cpedreiro
        cimbranco=data[2].materiai.valor*ccimbranco*1.0
        argcolante=data[3].materiai.valor*cargcolante*10.0 
        var tipoceramica=''
        var descricaoC=''
        console.log(JSON.stringify(data2))
        if(tipoP2==1){
            ceresmalta=data2[4].valor*cceresmalta*(0.6*0.6)
            tipoceramica=data2[4].id
            descricaoC=data2[4].descricao
        }else{
            if(tipoP2==2){
                ceresmalta=data2[5].valor*cceresmalta*(0.6*0.6)
                tipoceramica=data2[5].id
                descricaoC=data2[5].descricao
            }else{
                if(tipoP2==3){
                    ceresmalta=data2[6].valor*cceresmalta*(0.6*0.6)
                    tipoceramica=data2[6].id
                    descricaoC=data2[6].descricao
                }else{
                    ceresmalta=data2[7].valor*cceresmalta*(0.6*0.6)
                    tipoceramica=data2[7].id
                    descricaoC=data2[7].descricao
                }
            }
        }

   
        var data3 = {}
        
        data3=[
            {
                "nome": data[0].titulo,
                "unidade": "horas (H)",
                "quantidade":cservente,
                "preco":servente,
                "materialId": data[0].materiai.id  
            }, 
            {
                "nome": data[0].titulo,
                "unidade": "horas (H)",
                "quantidade":cpedreiro,
                "preco":pedreiro,
                "materialId": data[1].materiai.id 
            },
            {
                "nome": data[0].titulo,
                "unidade": "saco (10kg)",
                "quantidade":ccimbranco,
                "preco":cimbranco,
                "materialId": data[2].materiai.id  
            },
            {
                "nome": data[0].titulo,
                "unidade": "saco (10kg)",
                "quantidade":cargcolante,
                "preco":argcolante,
                "materialId": data[3].materiai.id  
            },
            {
                "nome": data[0].titulo,
                "unidade": "unidade",
                "quantidade":cceresmalta,
                "preco":ceresmalta,
                "materialId": tipoceramica  
            }      
        ]
        
        console.log(JSON.stringify(data3))
  
        valor=servente+pedreiro+cimbranco+argcolante+ceresmalta  
        
        if (confirm('Orçamento para '+data[0].nome+':\n'+data[0].materiai.descricao+'  '+data3[0].quantidade+' '+data3[0].unidade+' Preço: R$'+data3[0].preco.toFixed(2)+'\n'+data[1].materiai.descricao+'  '+data3[1].quantidade+' '+data3[1].unidade+' Preço: R$'+data3[1].preco.toFixed(2)+'\n'+data[2].materiai.descricao+'  '+data3[2].quantidade+' '+data3[2].unidade+' Preço: R$'+data3[2].preco.toFixed(2)+'\n'+data[3].materiai.descricao+'  '+data3[3].quantidade+' '+data3[3].unidade+' Preço: R$'+data3[3].preco.toFixed(2)+'\n'+descricaoC+'  '+data3[4].quantidade+' '+data3[4].unidade+' Preço: R$'+data3[4].preco.toFixed(2)+'\n'+'Valor total: R$ '+valor.toFixed(2) )) {
            Pedido.update(data3,valor,data)
        } 

  //      
    },    

    update: (data3,valor,data) => {

        var t = {}
        t.id = data[0].pedidoId
        t.valor = valor
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'PUT',
            url: '/pedido',
            data: t,
            success: (data) => {
                console.log('deu certo')
                alert('cadastro alterado com sucesso')
                for (var pedmat of data3) {
                    Pedmat.update(pedmat,t.id)
                }
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    }

}

Pedmat = {

    add: (data3,data) => {
        console.log('passou aqui agora')
        console.log(JSON.stringify(data)) 
        for (var pedmat of data3) {        
        var t = {}
        t.nome = pedmat.nome
        t.unidade =pedmat.unidade 
        t.quantidade = pedmat.quantidade
        t.preco = pedmat.preco
        t.pedidoId =data.id 
        t.materialId=pedmat.materialId

        console.log(JSON.stringify(t))

        $.ajax({
            type: 'POST',
            url: '/pedmat',
            data: t,
            dataType: 'json',
            success: (data) => {
                console.log('pedido inserido com sucesso')
            },
        })

    }
        return false
    },

    findOne: (dado,dado2) => {
        var t = {}
        t.pedidoId = dado
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/pedmat/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                $("#comments10").empty()
                if (data == "") {
                    alert('você não tem pedido ainda')
                }else{
                    Pedido.template5(data,dado2)
                }
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },

    remove: (data) => {
        var t = {}
        t.pedidoId = data.id
        t.userId=data.userId
        console.log('aqui esta em remover pedido e itens de pedido')
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'DELETE',
            url: '/pedmat',
            data: t,
            success: (data) => {
                alert('Pedidos do usuario deletados com sucesso')
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    },        

    update: (pedmat,data) => {

        var t = {}
        t.nome = pedmat.nome
        t.unidade = pedmat.unidade
        t.quantidade = pedmat.quantidade
        t.preco = pedmat.preco
        t.pedidoId = data
        t.materiaiId = pedmat.materialId
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'PUT',
            url: '/pedmat',
            data: t,
            success: (data) => {
                console.log('deu certo')
                alert('cadastro alterado com sucesso')
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    }

}

Profis = {
    add: (nome,senha,setor) => {
        var t = {}
        t.nome = nome
        t.senha = senha
        t.setor=setor
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/profi',
            data: t,
            dataType: 'json',
            success: (data) => {
                alert('dados inseridos com sucesso')
            },
        })

        return false
    },

    findOne: () => {
        var t = {}
        t.nome = $('#nomefun').val()
        t.senha = $('#senhafun').val()
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/profi/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                console.log('nome e senha achados com sucesso')
                console.log(JSON.stringify(data))
                var ti ={}
                var tii={}
                tii=data
                ti.id=data.id
                console.log(JSON.stringify(tii))
                $('#nomefun').val("")
                $('#senhafun').val("")
                $.ajax({
                    type: 'POST',
                    url: '/profi/login',
                    data: ti,
                    dataType: 'json',
                    success: (data) => {
                        if(data.auth){
                            console.log(JSON.stringify(tii))
                            if(tii[0].setor=='vendas'){
                                location.href="/vendas?token="+data.token 
                            }else{
                                if(tii[0].setor=='material'){
                                    location.href="/empresa?token="+data.token
                                }else{
                                    alert('Você não está autorizado a entrar na area de vendas e/ou de material')
                                }
                            }
                        }
                },
                    error: () => {
                        console.log('deu errado aqui')
                        location.href="/teste"
                    },
                    dataType: 'json'
                }) 
            },
            error: () => {
                console.log('deu errado aqui')
                $('#nomefun').val("")
                $('#senhafun').val("")
            },
            dataType: 'json'
        })
    },

    template: () => {
        $("#comments11").empty()

        var comment = $('<div></div>')
            .attr('id', 'comment')
            .attr('class', 'container4')


        var comment2 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var nomeTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Nome: ')

        var comment3 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var nome = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'Digite o seu nome...').html('')

        var comment4 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var senhaTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Senha: ')

        var comment5 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var senha = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'Digite sua senha...').html('')   
            
        var comment6 = $('<div></div>')
            .attr('id', 'comment2')
            .attr('class', 'col-25')

        var setorTitulo = $('<label></label>')
            .attr('id', 'nomeTitulo')
            .html('Setor: ')

        var comment7 = $('<div></div>')
            .attr('id', 'comment3')
            .attr('class', 'col-75')

        var setor = $('<input></input>')
            .attr('type', 'text').attr('id', 'nome')
            .attr('placeholder', 'Digite sua setor de trabalho...').html('')      
            
        var comment8 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var comment9 = $('<div></div>')
            .attr('id', 'comment2').attr('class', 'col-50')

        var botao = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Inserir')

        var botao2 = $('<input></input>')
            .attr('class', 'botao')
            .html('type', 'submit').attr('value', 'Cancelar')



        $(botao).on('click', (event) => {
            if ($(nome).val() === '') {
                alert('O nome do funcionario deve ser preenchido')
                $(nome).focus()
            } else {
                if ($(senha).val() === '') {
                    alert('A senha deve ser preenchida')
                    $(senha).focus()
                } else {
                    var nome2=$(nome).val()
                    var senha2=$(senha).val()
                    var setor2=$(setor).val()
                    Profis.add(nome2,senha2,setor2)
                }
            }
        })

        $(botao2).on('click', (event) => {
            $('#comments11').empty()
        })

        $(comment2).append(nomeTitulo)
        $(comment3).append(nome)
        $(comment4).append(senhaTitulo)
        $(comment5).append(senha)
        $(comment6).append(setorTitulo)
        $(comment7).append(setor)
        $(comment8).append(botao)
        $(comment9).append(botao2)
        $(comment).append(comment2)
        $(comment).append(comment3)
        $(comment).append(comment4)
        $(comment).append(comment5)
        $(comment).append(comment6)
        $(comment).append(comment7)
        $(comment).append(comment8)
        $(comment).append(comment9)
        $("#comments11").append(comment)
    }
 }

User = {

    add: () => {
        var t = {}
        t.nome = $('#fnameC').val()
        t.cpf = $('#lCPFC').val()
        t.telefone = $('#lcelularC').val()
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/usuarios',
            data: t,
            dataType: 'json',
            success: (data) => {
                alert('dados inseridos com sucesso')
                $('#entrar').attr('class', 'disabled2')
            },
            error: (data) => {
                console.log('deu errado aqui')
                console.log(JSON.stringify(data))
        //        alert(data.responseJSON.msg)
            },
            dataType: 'json'
        })
        return false
    },

    findAll: () => {
        $.ajax({
            type: 'GET',
            url: "/usuarios",
            success: User.loadAll,
            dataType: "json"
        })
    },    

    findOne: () => {
        var t = {}
        t.cpf = $("#fCPFAC").val()
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/usuarios/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                if (data == "") {
                    alert('Este usuário não existe, você deve se cadastrar primeiro')
                }
                console.log(JSON.stringify(data))
                $("#fnameAC").val(data[0].nome);
                $("#lCPF2AC").val(data[0].cpf);
                $("#lcelularAC").val(data[0].telefone);
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },

    findOne2: () => {
        var t = {}
        t.cpf = $("#fCPFAC").val()
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/usuarios/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                if (data == "") {
                    alert('Este usuário não existe, você deve se cadastrar primeiro')
                }
                console.log(JSON.stringify(data[0].id))
                Pedido.findOne3(data[0].id)
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },

    findOne3: () => {
        var t = {}
        t.cpf = $("#fCPFAC").val()
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/usuarios/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                if (data == "") {
                    alert('Este usuário não existe, você deve se cadastrar primeiro')
                }
                console.log(JSON.stringify(data[0].id))
                Pedido.remove(data[0].id)
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },

    findOne4: (tipoPiso,area,cpf,titulo) => {
        var t = {}
        t.cpf = cpf
        console.log(t.cpf,area,cpf,titulo)
        $.ajax({
            type: 'POST',
            url: '/usuarios/search2',
            data: t,
            dataType: 'json',
            success: (data) => {
                if(data==""){
                   alert('Este cpf não está cadastrado no sistema.Cadastre seu CPF.')
                }else{
                   Materiais.findAll2(data,tipoPiso,area,cpf,titulo) 
                }
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },  
    
    findOne5: (cpf2) => {
        var t = {}
        t.cpf = cpf2
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'POST',
            url: '/usuarios/search',
            data: t,
            dataType: 'json',
            success: (data) => {
                if(data==''){
                    alert('este cliente não esta cadastrado')
                }else{
                    Pedido.findOne(data)
                }
            },
            error: () => {
                console.log('deu errado aqui')
            },
            dataType: 'json'
        })
    },
    
    
    loadAll: (data) => {
        var userCombo = $("#users")
        for (user of data) {
            userCombo.append($('<option></option>').attr('value', user.id).html(user.firstname + '  ' + user.lastname))
        }
    },    

    remove: (data) => {
        var t = {}
        t.id = data.userId
        console.log('aqui esta em remover usuario')
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'DELETE',
            url: '/usuarios',
            data: t,
            success: (data) => {
                //      console.log(JSON.stringify(data))
                alert('Candidato à vaga excluído com sucesso')
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    },


    update: () => {

        var t = {}
        t.id = dados.id
        t.nome = $(comment).children('input.nome').val()
        t.nascimento = nascimento2
        t.telefone = $(comment).children('input.telefone').val()
        t.escolaridade = valor
        console.log(JSON.stringify(t))
        $.ajax({
            type: 'PUT',
            url: '/usuarios',
            data: t,
            success: (data) => {
                //quando der certo
                //     $(comment).children('textarea').prop('disabled', true)
                //        $(comment).children('button.edit').show()
                //        $(comment).children('button.save').hide()
                console.log('deu certo')
                alert('cadastro alterado com sucesso')
            },
            error: () => {
                console.log('deu erro aqui')
            },
            dataType: 'json'
        })

    }

}

$(document).ready(() => {

    $('#entrar').click((event) => {
        event.preventDefault()
        User.template()

    })

    $('#orcamento').click((event) => {
        event.preventDefault()
        var tipoPiso=1
        Pedido.template(tipoPiso)

    })

    $('#orcamento1').click((event) => {
        event.preventDefault()
        var tipoPiso=2
        Pedido.template(tipoPiso)

    })

    $('#orcamento2').click((event) => {
        event.preventDefault()
        console.log('passou aqui')
        var tipoPiso=3
        Pedido.template(tipoPiso)

    })

    $('#orcamento3').click((event) => {
        event.preventDefault()
        var tipoPiso=4
        Pedido.template(tipoPiso)

    })

})
