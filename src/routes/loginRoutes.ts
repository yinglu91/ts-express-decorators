import express, { RequestWithBody, Response, NextFunction, RequestHandler } from 'express'

const router = express.Router()

router.post('/login', (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true}
    req.rediect('/')
  } else {
    res.send('Invalid email or password')
  }
})

export {router} 
