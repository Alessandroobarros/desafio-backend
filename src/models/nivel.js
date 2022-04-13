import mongoose from 'mongoose'

const NivelSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true
    },
    nivel: {
      type: String
    },
    dataCriacao: {
      type: String
    }
  }
)
const Nivel = mongoose.model('Nivel', NivelSchema)

export default Nivel
