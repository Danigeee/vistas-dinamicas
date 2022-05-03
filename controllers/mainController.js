

//crear el objeto main controler
let mainController = {
    //crear un metodo que tenga el (req, res) para / y para /about y responder con un archivo que es la vista
    index: function(req,res){
        

        res.render("index", {"menu": menu})
    },
    detalle: function(req,res){
        let id = req.params.id;
        
        
        const platoPedido = menu.find(plato => plato.id == id);


        res.render("detalleMenu", {"platoPedido": platoPedido})
    },

};
let menu = [
    {
        id: 1,
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: "U$S 65.50",
        imagen: "/images/Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00",
        imagen: "/images/Risotto-berenjena-queso-cabra.jpg"
    },
     {
        id: 3,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: "U$S 27.50",
        imagen: "/images/Mousse-de-arroz-con-leche.jpg"
    }, 
    {
        id: 4,
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: "U$S 37.50",
        imagen: "/images/esparragos.png"
    },
]

//expoirtar el controlador 
module.exports = mainController;