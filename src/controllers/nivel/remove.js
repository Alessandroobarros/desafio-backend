import Nivel from '../../models/nivel.js'
import Desenvolvedor from '../../models/desenvolvedor.js'
import mongoose from 'mongoose'

const removeById = async (req, res) => {
   try {
    const { id } = req.params

    const isValid = mongoose.Types.ObjectId.isValid(id)

    if(!isValid){
      return res.status(422).json({ error: 'id invalido, informe um id valido!' })
    }

    const nivelCadastrado = await Nivel.find({id})

    if(!nivelCadastrado){
      return res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    const devNivel = await Desenvolvedor.find({nivel: id})

    if(devNivel.length > 0){
      return res.status(501).json({ error: 'Não foi possivel excluir o nivel pois existem desenvolvedores cadastrados nele' })
    }

    await Nivel.deleteOne({_id: id})

    res.status(200).json({message: `Nivel excluido com sucesso!`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}
export default removeById

