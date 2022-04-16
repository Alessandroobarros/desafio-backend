import niveisService from '../../services/nivel/index.js'
import desenvolvedorService from '../../services/desenvolvedor/index.js'
import mongoose from 'mongoose'

const removeById = async (req, res) => {
   try {
    const { id } = req.params

    const isValid = mongoose.Types.ObjectId.isValid(id)

    if(!isValid){
      return res.status(422).json({ error: 'id invalido, informe um id valido!' })
    }

    const nivelCadastrado = await niveisService.findById(id)
    if(!nivelCadastrado){
      return res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    const devNivel = await desenvolvedorService.findByNivel(id)

    if(devNivel){
      return res.status(501).json({ error: 'Não foi possivel excluir o nivel pois existem desenvolvedores cadastrados nele' })
    }

    const response = await niveisService.removeById(id)

    res.status(204).send()
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export default removeById
