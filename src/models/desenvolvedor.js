import mongoose from 'mongoose'

const DesenvolvedorSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    nivel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nivel',
      required: true
    },
    nome: { type: String },
    sexo: { type: String },
    datanascimento: Date,
    idade: { type: Number },
    hobby: { type: String }
  }
)

const Desenvolvedor = mongoose.model('Desenvolvedor', DesenvolvedorSchema)

export default Desenvolvedor
