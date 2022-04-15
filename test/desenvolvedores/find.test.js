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

const findById = async (req, res) => {
  try {
    const { id } = req.params

    const response = await Desenvolvedor.findOne({ _id: id }).populate('nivel')

    if(!response){
      return res.status(501).json({ error: 'Nem um cadastro foi encontrado para este id' })
    }

    res.status(200).json(response)
  } catch (error) {
    return res.status(400).json({
      message:
        'Falha na consulta de Desenvolvedor'
    })
  }
}

export  { findAll, findById }
