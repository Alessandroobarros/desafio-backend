import Nivel from '../../models/nivel.js'

const removeById = async (req, res) => {
   try {
    const { id } = req.params

    if(!id){
      throw res.status(422).json({ error: 'Necessario informar o id do registro' })
    }

    const nivelCadastrado = await Nivel.findOne({_id: id})
    if(!nivelCadastrado){
      throw res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    await Nivel.deleteOne({_id: id})

    res.status(200).json({message: `Nivel excluido com sucesso!`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}
export default removeById

