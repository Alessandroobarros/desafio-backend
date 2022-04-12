const mongoose = require('mongoose')

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

module.exports = Nivel
