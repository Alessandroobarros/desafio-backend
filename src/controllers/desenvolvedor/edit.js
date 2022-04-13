import Desenvolvedor from '../../models/desenvolvedor.js'


const edit = async (req, res) => {
  try {
    const dados = req.body
    const id = req.params.id

    if(!dados){
      throw res.status(422).json({ error: 'Necessario informar o campo a atualizar no body' })
    }

    const desenvolvedorCadastrado = await Desenvolvedor.findOne({_id: id})
    if(!desenvolvedorCadastrado){
      throw res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    await Desenvolvedor.findByIdAndUpdate(id, {$set: req.body})

    res.status(200).json({message: `Desenvolvedor atualizado com sucesso!`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export default edit
