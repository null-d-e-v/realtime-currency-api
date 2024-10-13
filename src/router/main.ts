import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ title: 'Realtime Currency API', version: '1.0.0', session: req.session })
})


router.post('/login', async (req, res) => {
  await new Promise<void>((resolve) => {
    req.session.regenerate((err: any) => {
      if (err) {
        console.log(err)
        resolve()
      }

      req.session.user = true

      req.session.save((err: any) => {
        if (err) {
          console.log(err)
          resolve()
        }

        resolve()
      })
    })
  })

  return res.redirect('/')
})

router.post('/logout', async (req, res) => {
  await new Promise<void>((resolve) => {
    req.session.user = undefined;

    req.session.save((err: any) => {
      if (err) {
        console.log(err)
        resolve()
      }

      req.session.regenerate((err: any) => {
        if (err) {
          console.log(err)
          resolve()
        }

        resolve()
      })
    })
  })

  return res.redirect('/')
})

export default router
