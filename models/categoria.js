
const { Schema, model } = require('mongoose');




const CategoriaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },

    estado: {
        type: Boolean,
        default: true,
        required: true
    },
});


CategoriaSchema.methods.toJSON = function() {
    const { __v, _id, estado, ...data  } = this.toObject();
    data.id = _id;
    return data;
}


module.exports = model( 'Categoria', CategoriaSchema );
