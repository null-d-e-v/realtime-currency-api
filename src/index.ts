import 'reflect-metadata'

import express from 'express'
import { createExpressServer } from 'routing-controllers'
import IndexRouter from './router'
import ApiRouter from './router/api'

const app = createExpressServer({
  controllers: [IndexRouter, ApiRouter]
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})


