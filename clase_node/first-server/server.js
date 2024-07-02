import express, { request, response } from 'express';

const app = express()

//* http://localhost:3008/

app.get( '/', (_request, response) => {
    return response.status(200).json({
        name: "Triana",
        pet: "Amy",
        year: 2024
    })
})

app.get('/amy', (_request, response) => {
    return response.status(200).send('Amy es una perrita rubia')
})

app.get('/healthcheck', (_request, response) => {
    return response.status(200).send('OK')
})

app.listen(3008, () => {
    console.log('Servidor levantado en el puerto 3008')
})

