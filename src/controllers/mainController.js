const controlador = {
        index: (req,res) => {
            res.render('index.ejs')
        },
        contact: (req,res) => {
            res.render('contact.ejs')
        }
}

module.exports = controlador;
/* 
const objeto = {
    obj1: 'joa',
    obj2: 23,
    obj3: true,
    obj4: [
        {
            miniObj: 'hola'
        }
    ]
}

objeto.obj3[0].miniObj */
