import desenvolvedorServices from "../../services/desenvolvedor/index.js"

const create = async (req, res) => {
  try {
    const dados = req.body
    console.log('Dados', dados);

    if(Object.entries(dados).length < 6){
      return res.status(422).json({ error: 'Necessario informar todos os campos no body' })
    }

    const response = await desenvolvedorServices.create(dados)
    console.log('RESPONSE CREATE', response);
    const { _id } = response
    res.status(201).json({message: `Desenvolvedor criado com sucesso id: ${_id}`})
  } catch (error) {
    console.log(error)
    return res.status(400).json({error: error})
  }
}

export default create
