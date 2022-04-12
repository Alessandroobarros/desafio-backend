const moment = require('moment')
const Nivel = require('../../models/nivel')

const create = async (req, res) => {
  try {
    const dados = req.body

    if(!dados){
      res.status(422).json({ error: 'Deve-se informar as o nivel no body' })
    }
    const nivel = dados

    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')

    const nivelData = { ...nivel, dataCriacao}

    const response = await Nivel.create(nivelData)

    const { _id } = response
    res.status(201).json({message: `Nivel criado com sucesso id: ${_id}`})
  } catch (error) {
    console.log(error);
     return res.status(400).json({error: error})
  }
}

module.exports = create

