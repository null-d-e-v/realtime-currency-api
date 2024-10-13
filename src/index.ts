import express from 'express'
import session from 'express-session'
import cors, { CorsOptions } from 'cors'

import { createRouter } from './router'

declare module 'express-session' {
  interface Session {
    user?: boolean
  }
}

const app = express()
const corsConfig: CorsOptions = {
  origin: '*'
}

app.use(cors(corsConfig))
app.use(session({
  secret: String(process.env.COOKIE_PWD),
  resave: false,
  saveUninitialized: true,
  name: 'xsessionid',
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none'
  }
}))

createRouter(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})


