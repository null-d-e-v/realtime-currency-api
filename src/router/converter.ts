import express from 'express'

const router = express.Router()

router.post('/:from/:to', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/')
  }

  res.status(200).json({ message: 'LLegaste!' })
})

export default router
