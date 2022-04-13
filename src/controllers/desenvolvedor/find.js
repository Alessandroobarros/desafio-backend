import Desenvolvedor from '../../models/desenvolvedor.js'

const findAll = async (req, res) => {
  try {
    const response = await Desenvolvedor.find().populate('nivel')

    res.status(200).json(response)
  } catch (error) {
    return res.status(400).send({
      message:
        'Falha na consulta de Desenvolvedores'
    })
  }
}


export default findAll
