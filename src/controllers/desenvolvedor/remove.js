import desenvolvedorServices from "../../services/desenvolvedor/index.js"

const remove = async (req, res) => {
  try {
    const { id } = req.params

    const desenvolvedorCadastrado = await desenvolvedorServices.findById(id)
    if(!desenvolvedorCadastrado){
      return res.status(400).json({ error: 'Não foi encontrado desenvolvedor cadastrado com este id' })
    }

    await desenvolvedorServices.remove(id)

    res.status(204).send()
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export default remove
