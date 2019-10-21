require('dotenv').config()

const { MongoClient, ObjectID } = require('mongodb');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const { PORT = 3000, MONGODB_URL } = process.env

let db

const mongoCLient = new MongoClient(MONGODB_URL, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
 });

 //movimentações
app.get('/movimentacoes', listarMovimentacoes);
app.post('/movimentacoes', createMovimentacao);
app.get('/movimentacoes/:id', showMovimentacao);

async function listarMovimentacoes(request, response) {
    const collection = db.collection('movimentacoes');

    let movimentacoes = await collection.find({}).toArray()


    response.send(movimentacoes);
}


async function createMovimentacao(request, response) {
    const collection = db.collection('movimentacoes')

    collection.insertMany([request.body])
    response.send({
        'valor': 10.00,
        'descricao': 'Hello World'
    })
}

async function showMovimentacao({ params: {id} }, response) {

  try{
    const collection = db.collection('movimentacoes')    
    const [movimentacao] = await collection.find( { _id: new ObjectID(id) } ).toArray()

    if (!movimentacao) {
        response.sendStatus(404);
        return
    }

    response.send(movimentacao);
  }catch(err) {
    console.log(err)
    response.sendStatus(500)
  }
    
}

async function main() {
    await mongoCLient.connect()
    console.log('Connected sucessfuly to server')
    db = mongoCLient.db('aulanode')
    
    console.log('Server start at: ' + PORT)
    const server = app.listen(PORT, () => console.log('Server ready'))

    server.on('SIGINT', () => {
        console.log('Disconnecting database')
        mongoCLient.close()
        console.log('Sucessfuly disconnect from database')
        server.close(() => {
            console.log('Process terminated')
        })
    })
}

main().catch((err) => {
    mongoCLient.close()
    console.error(err)
    console.log('Disconnect from error')
});

