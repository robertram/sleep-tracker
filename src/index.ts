import express from 'express'
import cors from 'cors'
// import { graphqlHTTP } from "express-graphql";
// import { makeExecutableSchema } from "@graphql-tools/schema";

import alarmsRouter from './routes/alarms'

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_request, response) => {
  response.send('Hello, GraphQL!')
})

app.use('/api/alarms', alarmsRouter)

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})
