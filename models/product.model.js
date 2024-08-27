const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        buko_shake_small: { 
            type: Number, 
            required: [true , "Product price is required"], 
            default: 35
        },
        buko_shake_medium: { 
            type: Number, 
            required: [true , "Product quantity is required"], 
            default: 50
        },
        buko_shake_large: { 
            type: Number, 
            required: [true , "Product price is required"], 
            default: 80
        },
        buko_juice_small: { 
            type: Number, 
            required: [true , "Product price is required"], 
            default: 35
        },
        buko_juice_medium: { 
            type: Number, 
            required: [true , "Product price is required"], 
            default: 50
        },
        buko_juice_large: { 
            type: Number, 
            required: [true , "Product price is required"], 
            default: 80
        },
        

    },
    { 
        timestamps: true 
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;