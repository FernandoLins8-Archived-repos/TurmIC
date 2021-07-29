import express, { json } from 'express'
import cors from 'cors'
import "reflect-metadata"

import './database'
import routes from './routes'

const app = express()

app.use(json())
app.use(cors())
app.use(routes)

app.listen(5000, () => console.log('Running on 5000'))
