import Drink from "../models/drink.model.js"
export default {
    addDrink: (req, res) => {
        Drink.create({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            conCaff: req.body.conCaff,
            volume: req.body.volume,
            description: req.body.description
        }).then((a) => {
            res.json(a)
        })
    },
    updateDrink: (req, res) => {
        Drink.findByIdAndUpdate(req.params.drinkId, {
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            conCaff: req.body.conCaff,
            volume: req.body.volume,
            description: req.body.description
        },
            { new: true },)
            .then((a) => {
                res.json(a)
            })
    },
    delDrink: (req, res) => {
        Drink.findByIdAndDelete(req.params.drinkId
        ).then((a) => {
            res.json(a)
        })
    },
    getDrinksById: (req, res) => {
        Drink.findById(req.params.drinkId).then((a) => {
            res.json(a)
        })
    },
    getDrinks: (req, res) => {
        Drink.find({}, { price: 1, name: 1, _id: 1 }).then((a) => {
            res.json(a)
        })
    },
    getDrinksStock: (req, res) => {
        Drink.find({ inStock: true }, { price: 1, name: 1, _id: 1, inStock: 1 }).then((a) => {
            res.json(a)
        })
    }
}
