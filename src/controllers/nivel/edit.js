import niveisService from "../../services/nivel/index.js"

const update = async (req, res) => {
  try {
    const dados = req.body
    const { id } = req.params

    if(Object.entries(dados).length === 0){
      return res.status(422).json({ error: 'Necessario informar o campo a atualizar no body' })
    }

    const nivelCadastrado = await niveisService.findById(id)

    if(!nivelCadastrado){
      return res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    const response = await niveisService.edit(id, dados)

    res.status(200).json({message: `Nivel alterado com sucesso!`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}


export default update
