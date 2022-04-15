import Desenvolvedor from '../../models/desenvolvedor.js'


const remove = async (req, res) => {
  try {
    const { id } = req.params

    const DesenvolvedorCadastrado = await Desenvolvedor.findOne({_id: id})
    if(!DesenvolvedorCadastrado){
      throw res.status(400).json({ error: 'Não foi encontrado desenvolvedor cadastrado com este id' })
    }

    await Desenvolvedor.deleteOne({_id: id})

    res.status(200).json({message: `Desenvolvedor excluido com sucesso!`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export default remove
