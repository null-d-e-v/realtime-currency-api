import express from 'express'
import session from 'express-session'
import cors, { CorsOptions } from 'cors'
import SessionFileStore from 'session-file-store'

import { createRouter } from './router'
import logger from './utils/logger'
import { httpLogger } from './middlewares/logger'


declare module 'express-session' {
  interface Session {
    user?: boolean
  }
}

const app = express()

// Server utils
const FileStore = SessionFileStore(session)
const corsConfig: CorsOptions = {
  origin: '*',
  credentials: true
}

// Server settings
app.set("trust proxy", 1)

// Server middlewares
app.use(httpLogger)
app.use(cors(corsConfig))
app.use(session({
  secret: String(process.env.COOKIE_PWD),
  resave: false,
  saveUninitialized: true,
  name: 'xsessionid',
  store: new FileStore(),
  cookie: {
    secure: true, //INFO To test you need a site with ssl or self signed cert
    sameSite: 'none'
  }
}))

// Server router
createRouter(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
  logger.info(`Server listen on port ${port}`)
})


