import request from "supertest"
import app from "../../src/app.js"
import db from "../../src/config/dbConnect.js"


const url = process.env.MONGO_URL

const makeHttpRequest =  {
  _id: "625c569de5923a4296a6ac3d",
  nivel: "JUNIOR",
  dataCriacao: "2022-04-17 15:04:63"
}


describe('Test app server', () => {
  beforeAll(async () => {
    db.connect(url)
  })

  afterAll( () => {
      db.disconnect()
  })

  it('should return 201 when registering a level', async () => {
    const res = await request(app)
                  .post('/nivel')
                  .send(makeHttpRequest)
    
    expect(res.statusCode).toEqual(201)
  })

  it('should return 200 when listing levels', async () => {
    const res = await request(app)
                  .get('/nivel')

    
    expect(res.statusCode).toEqual(200)
  })

  it('should return 200 when listing a level', async () => {
    const res = await request(app)
                  .get('/nivel/625c569de5923a4296a6ac3d')

    
    expect(res.statusCode).toEqual(200)
  })

  it('should return 204 when deleting the level', async () => {
    const res = await request(app)
                  .delete('/nivel/625c569de5923a4296a6ac3d')

    expect(res.statusCode).toEqual(204)
  })
})
