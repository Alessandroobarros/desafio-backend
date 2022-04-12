const Desenvolvedor = require('../../models/desenvolvedor')

const findAll = async (req, res) => {
  try {
    const response = await Desenvolvedor.find()

    res.status(200).json(response)
  } catch (error) {
    return res.code(500).send({
      message:
        'Falha na consulta de Desenvolvedor'
    })
  }
}

const findById = async (req, res) => {
  try {
    const response = await Desenvolvedor.find({
      id: req.params.idDev
    })

    res.status(200).json(response)
  } catch (error) {
    return res.code(500).send({
      message:
        'Falha na consulta de Desenvolvedor por Id'
    })
  }
}

module.exports = { findAll, findById }
