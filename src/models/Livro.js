import monggose from "mongoose";

const livroSchena = new monggose.Schema(
    {
        id: {type: String},
        titulo:  {type: String, required: true},
        autor:  {type: monggose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora:  {type: String, required: true},
        numeroPaginas:  {type: Number}
    }
);

const livros = monggose.model('livros', livroSchena);

export default livros;