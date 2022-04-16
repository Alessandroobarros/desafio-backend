import desenvolvedorServices from '../../services/desenvolvedor/index.js'

const findAll = async (req, res) => {
  try {
    const response = await desenvolvedorServices.findAll()

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

    const response = await desenvolvedorServices.findById(id)
    if(!response){
      return res.status(400).json({ error: 'Não foi encontrado desenvolvedor cadastrado com este id' })
    }

    res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message:
        'Falha na consulta de Desenvolvedor'
    })
  }
}

export  { findAll, findById }
