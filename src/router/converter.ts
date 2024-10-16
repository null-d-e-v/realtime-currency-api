import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/')
  }

  const { from, to } = req.query

  console.log(from, to)

  res.status(200).json({ 'message': 'hola' })
})

export default router
