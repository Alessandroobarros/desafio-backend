import { connect } from "../../src/config/dbConnect.js"
import supertest from "supertest"
import app from "../../src/app.js"

// const User = require('../../../src/models/user')
// const env =require('../../../src/config/config')
// const { request } = require('express')

const url = process.env.MONGO_URL

const desenvolvedorJson = [
  {
    "nivel": "6254dd4da80fb2d240c0dbb2",
    "nome": "TESTE",
    "sexo": "M",
    "datanascimento": "09-10-1992",
    "idade": 99,
    "hobby": "Jogar Video Game"
  }
]

describe('Teste de rotas', () => {
    beforeAll(async () => {
        connect(url)
    })

    beforeEach(async () => {
        await User.deleteMany()
    })

    afterAll( () => {
        db.disconnect()
    })

    //Verifica se a rota de cadastro esta correta.
    it('Rota POST /cadastro deve retornar status 200', async () =>{
        await supertest(app)
            .post('/cadastro')
            .send({
                cep: 87020050
            })
            .expect(200)
    })

    //Verifica se a rota de listar esta correta.
    it('Rota GET / deve retornar 200', async () => {
        await supertest(app)
            .get('/')
            .expect(200)
    })
})

