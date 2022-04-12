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
    console.log(error);
    return res.status(400).json({error: error})
  }
}


const findAll = async (req, res) => {
 try {
    const response = await Nivel.find()

    res.status(200).json(response)
  } catch (error) {
    return res.code(500).send({
      message:
        'Falha na consulta de Nivel'
    })
  }
}


const removeById = async (req, res) => {
   try {
    const dados = req.body

    if(!dados){
      throw res.status(422).json({ error: 'Necessario informar o id do registro' })
    }

    const { id } = req.params

    const nivelCadastrado = await Nivel.findOne({_id: id})
    if(!nivelCadastrado){
      throw res.status(400).json({ error: 'Não foi encontrado nivel cadastrado com este id' })
    }

    const response = await Nivel.deleteOne({_id: id})


    res.status(200).json({message: `Nivel excluido com sucesso!`})
  } catch (error) {
    console.log(error);
    return res.status(400).json({error: error})
  }
}

module.exports = { update, create, findAll, removeById}

