const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isFinite,
                message: "{VALUE} is not a valid price",
            },
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
