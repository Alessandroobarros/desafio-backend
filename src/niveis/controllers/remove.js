const moment = require('moment')
const Nivel = require('../../models/nivel')

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

module.exports = removeById

