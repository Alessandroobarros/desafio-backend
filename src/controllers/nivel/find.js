import Nivel from '../../models/nivel.js'

const findAll = async (req, res) => {
 try {
    const response = await Nivel.find()

    res.status(200).json(response)
  } catch (error) {
    return res.code(400).send({
      message:
        'Falha na consulta de Nivel'
    })
  }
}


export default findAll
