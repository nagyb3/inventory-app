const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String, maxLength: 300 }
})

CategorySchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/categories/${this._id}`;
});



module.exports = mongoose.model("Category", CategorySchema)