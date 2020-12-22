import express from 'express'
import cookieSession from 'cookie-session'

// mimic ts-express-decorators

import { AppRouter } from './AppRouter'
import './controllers/LoginController'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieSession({ keys: ['asdfasfd']}))

app.use(AppRouter.getInstance())

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})