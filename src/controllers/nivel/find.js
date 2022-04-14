import Nivel from '../../models/nivel.js'
import config from '../../config/env.js'

const findAll = async (req, res) => {
 try {
    const response = await Nivel.find().limit(config.LIMIT)

    res.status(200).json(response)
  } catch (error) {
    return res.code(400).send({
      message:
        'Falha na consulta de Nivel'
    })
  }
}

const findByName = async (req, res) => {
  try {
    const { name } = req.params

    console.log('Name', name);

    const response = await Nivel.findOne({ nivel: name })

    console.log('RESPONSE', response);

    if(!response){
      return res.status(501).json({ error: 'Nem um cadastro foi encontrado para este nivel' })
    }

    res.status(200).json(response)
  } catch (error) {
    return res.status(400).send({
      message:
        'Falha na consulta de Nivel'
    })
  }
}

export  { findAll, findByName }
