import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: String,
    deliveryAddress: String,
    contactNumber: Number,
    contactPerson: String,
    billAmount: Number,
    status: {
        type: String,
        default: "pending"
    },
    paymentMode: String,
    orderItem:[{
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
        qty: Number
    }]
});
export const Order = mongoose.model("order",orderSchema);