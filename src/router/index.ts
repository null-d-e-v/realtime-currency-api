import express, { Express } from 'express'

import IndexRouter from './main'
import ConvertRouter from './converter'

const createApiRouter = () => {
  const apiRouter = express.Router()

  apiRouter.use('/convert', ConvertRouter)

  return apiRouter
}

export const createRouter = (app: Express) => {
  app.use(IndexRouter)
  app.use('/api', createApiRouter())
}
