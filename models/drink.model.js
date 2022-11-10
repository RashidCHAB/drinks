import mongoose from "mongoose";



const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    conCaff: Boolean,
    volume: String,
    description: String
})

const Drink = mongoose.model('Drink', drinkSchema)

export default Drink 

