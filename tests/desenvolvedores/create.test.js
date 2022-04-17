import supertest from "supertest"
import app from "../../src/app.js"
import db from "../../src/config/dbConnect.js"
// import desenvolvedorController from "../../src/controllers/desenvolvedor/index.js"
// import desenvolvedorServices from "../../src/services/desenvolvedor/index.js"
import Desenvolvedor from "../../src/models/desenvolvedor.js"
const url = process.env.MONGO_URL

const makeHttpRequest = () => ({
  body: {
    nivel: '6254dd4da80fb2d240c0dbb2',
    nome: 'TESTE',
    sexo: "M",
    datanascimento: "09-10-1992",
    idade: 99,
    hobby: "Jogar Video Game"
  }
})

const makeHttpResponse = () => ({
    json: (value) => ({value})
})


describe('statusCode 200', () => {
   beforeAll(async () => {
        db.connect(url)
    })

    beforeEach(async () => {
        await Desenvolvedor.deleteMany()
    })

    afterAll( () => {
        db.disconnect()
    })

   it('should return status 200 when registering a developer', async () => {

    await supertest(app)
          .post('./desenvolvedor')
          .send(makeHttpRequest())
          .expect(200)
  })
})

