const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Ürün adı zorunludur'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Ürün açıklaması zorunludur']
    },
    price: {
        type: Number,
        required: [true, 'Ürün fiyatı zorunludur'],
        min: [0, 'Fiyat 0\'dan küçük olamaz']
    },
    category: {
        type: String,
        required: [true, 'Kategori zorunludur']
    },
    stock: {
        type: Number,
        required: [true, 'Stok miktarı zorunludur'],
        min: [0, 'Stok miktarı 0\'dan küçük olamaz']
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema); 