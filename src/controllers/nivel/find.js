import niveisService from '../../services/nivel/index.js'

const findAll = async (req, res) => {
 try {
    const response = await niveisService.findAll()

    res.status(200).json(response)
  } catch (error) {
    return res.code(400).send({
      message:
        'Falha na consulta de Nivel'
    })
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params

    const response = await niveisService.findById(id)

    if(!response){
      return res.status(400).json({ error: 'Nem um cadastro foi encontrado para este id' })
    }

    res.status(200).json(response)
  } catch (error) {
    return res.status(404).send({
      message:
        'Falha na consulta de Nivel'
    })
  }
}

export  { findAll, findById }
