import Desenvolvedor from '../../models/desenvolvedor.js'

const create = async (req, res) => {
  try {
    const dados = req.body

    if(!dados){
      res.status(422).json({ error: 'Deve-se informar todos os campos' })
    }

    const response = await Desenvolvedor.create(dados)

    const { _id } = response
    res.status(201).json({message: `Desenvolvedor criado com sucesso id: ${_id}`})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export default create
