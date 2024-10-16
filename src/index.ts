import express from 'express'
import bodyParser from 'body-parser'

import logger from './utils/logger'
import useCors from './utils/cors'
import useSession from './utils/session'
import { createRouter } from './router'
import { httpLogger } from './middlewares/logger'


declare module 'express-session' {
  interface Session {
    user?: boolean
  }
}

const app = express()

app.set("trust proxy", 1)
app.disable('x-powered-by')

app.use(httpLogger)
app.use(bodyParser.json())

useCors(app)
useSession(app)

createRouter(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
  logger.info(`Server listen on port ${port}`)
})


