const { Schema } = require('mongoose')

const DesenvolvedorSchema = new Schema(
  {
    id: { type: String },
    nivel: { type: Number },
    nome: { type: String },
    sexo: { type: String },
    datanascimento: { type: Date },
    idade: { type: Number },
    hobby: { type: String }
  }
)

const Desenvolvedor = mongoose.model('Desenvolvedor', DesenvolvedorSchema)

module.exports = Desenvolvedor
