import request from "supertest"
import app from "../../src/app.js"
import db from "../../src/config/dbConnect.js"


const url = process.env.MONGO_URL

const makeHttpRequest =  {
    _id: "625c56d9e5923a4296a6ac44",
    nivel: '6254dd4da80fb2d240c0dbb2',
    nome: 'TESTE',
    sexo: "M",
    datanascimento: "09-10-1992",
    idade: 99,
    hobby: "Jogar Video Game"
  }


describe('Test app server', () => {
  beforeAll(async () => {
    db.connect(url)
  })

  afterAll( () => {
      db.disconnect()
  })
  it('should return 200', async () => {
    const res = await request(app).get('/status')

    expect(res.statusCode).toEqual(200)
  })

  it('should return 201 when registering a developer', async () => {
    const res = await request(app)
                  .post('/desenvolvedor')
                  .send(makeHttpRequest)
    
    expect(res.statusCode).toEqual(201)
  })

  it('should return 200 when listing developers', async () => {
    const res = await request(app)
                  .get('/desenvolvedor')

    
    expect(res.statusCode).toEqual(200)
  })

  it('should return 200 when listing a developer', async () => {
    const res = await request(app)
                  .get('/desenvolvedor/625c56d9e5923a4296a6ac44')

    
    expect(res.statusCode).toEqual(200)
  })

  it('should return 204 when deleting the developer', async () => {
    const res = await request(app)
                  .delete('/desenvolvedor/625c56d9e5923a4296a6ac44')

    expect(res.statusCode).toEqual(204)
  })
})
