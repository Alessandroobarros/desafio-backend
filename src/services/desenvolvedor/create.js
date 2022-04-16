import Desenvolvedor from '../../models/desenvolvedor.js'

const create = async (dados) => {

  return await Desenvolvedor.create(dados)

}

export default create
