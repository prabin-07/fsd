const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        product_name : String,
        product_price : Number,
        product_category : String
    }
)

module.exports=mongoose.model('Product',productSchema);