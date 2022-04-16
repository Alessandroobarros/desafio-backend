import desenvolvedorServices from '../../services/desenvolvedor/index.js'

const edit = async (req, res) => {
  try {
    const dados = req.body
    const id = req.params.id

    if(Object.entries(dados).length === 0){
      return res.status(422).json({ error: 'Necessario informar o campo a atualizar no body' })
    }

    const desenvolvedorCadastrado = await desenvolvedorServices.findById(id)
    if(!desenvolvedorCadastrado){
      return res.status(400).json({ error: 'Não foi encontrado desenvolvedor cadastrado com este id' })
    }

    await desenvolvedorServices.edit(id,dados)

    res.status(200).json({message: `Desenvolvedor atualizado com sucesso!`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export default edit
