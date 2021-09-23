const menus = require("../data/menu.json")
const controller = {
    index: (req,res,next) => {
        
            res.render('index',{menus});
    },
    detalle: (req,res,next) => {
        const {id} = req.params 
        const menu = menus.find(e => e.id === +id)
        res.render("detalleMenu", {menu})
        
        
    }
}

module.exports= controller