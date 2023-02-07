const { Schema, model } = require('mongoose');






const ProductoSchema = Schema({

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

    precio: {
        type: Number,
        default: 0
    },

    tipo: {
        type: String,
        emun: ['HOMBRE', 'MUJER', 'NINIO', 'NINIA'],
        required: true,
    },

    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },

    descripcion: { 
        type: String 
    },

    aviso: { 
        type: String 
    },

    informacion: { 
        type: String 
    },

    detalles: { 
        type: String 
    },


    disponible: { 
        type: Boolean, 
        defult: true 
    },

    img: { 
        type: String 
    },

});



ProductoSchema.methods.toJSON = function() {
    const { __v, _id, estado, ...data  } = this.toObject();
    data.id = _id;
    return data;
}


module.exports = model( 'Producto', ProductoSchema );
