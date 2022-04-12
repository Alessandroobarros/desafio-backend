const moment = require('moment')
const Nivel = require('../../models/nivel')

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


module.exports = findAll
