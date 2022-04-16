import Nivel from "../../models/nivel.js"

const create = async (dados) => {

  return await Nivel.create(dados)

}

export default create
