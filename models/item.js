const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    description: {
        type: String,
        maxLength: 300
    },
    // category: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    price: { type: Number, required: true },
    numberInStock: { type: Number }
})

ItemSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/item/${this._id}`;
});



module.exports = mongoose.model("Item", ItemSchema)