import Nivel from '../../models/nivel.js'

const update = async (req, res) => {
  try {
    const dados = req.body

    if(!dados){
      throw res.status(422).json({ error: 'Necessario informar o id no body' })
    }
    const { nivel } = dados
    const { id } = req.params

    const nivelCadastrado = await Nivel.findOne({_id: id})
    if(!nivelCadastrado){
      throw res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    const response = await nivelCadastrado.updateOne({
      nivel: nivel
    })

    res.status(200).json({message: `Nivel alterado com sucesso! : ${response}`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}


export default update
