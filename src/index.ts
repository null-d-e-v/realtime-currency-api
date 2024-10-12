import 'reflect-metadata'

import express from 'express'
import { createExpressServer } from 'routing-controllers'
import { IndexRouter } from './router'

const app = createExpressServer({
  controllers: [IndexRouter]
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})


