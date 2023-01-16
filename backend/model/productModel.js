const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter description"],
  },
  price: {
    type: Number,
    required: [true, "please enter price"],
    maxLength: [6, "price cannot exceed 6 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
    category: {
        type: String,
        required: [true, "please select a category"]
    },
    stock: {
        type: String,
        required: [true, "please enter product stock"],
        maxLength: [4, "Stock connot exceed 4 characters"],
        default:1,
    },
    mumOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [{
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comments: {
            type: String,
            
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema)