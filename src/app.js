import express from 'express'
import router from './routes'

const instance = express()

instance.use(express.json())
instance.use(router)

export default instance