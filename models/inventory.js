import mongoose from 'mongoose'

const Schema = mongoose.Schema

const inventorySchema = new Schema({
  ingredient: String,
  isAvailable: {type: Boolean, default: true},
  price: Number,
  type: {type: String, enum: ['crust', 'ingredient', 'beverages']}
},{
  timestamps: true,
})



const Inventory = mongoose.model('Inventory', inventorySchema)

export { Inventory }