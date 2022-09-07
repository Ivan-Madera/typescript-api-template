import express from 'express'
import routerApi from '../routes'

const app = express()

app.set('port', (process.env.PORT != null) || 3000)
app.use(express.json())
routerApi(app)

export default app
