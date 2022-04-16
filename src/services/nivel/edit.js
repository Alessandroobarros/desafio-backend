import Nivel from '../../models/nivel.js'

const edit = async (id, dados) => {

  return await Nivel.findByIdAndUpdate(id, {$set: dados})

}

export default edit
// await nivelCadastrado.updateOne({
//       nivel: nivel
//     })
