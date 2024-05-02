import express from 'express'
import userController from './app/controller/userController.js'

const instance = express()
instance.use(express.json())

instance.post("/users/create", userController.store)
instance.get("/users", userController.index)
instance.get("/users/:id", userController.show)
instance.put("/users/:id", userController.update)
instance.delete("/users/:id", userController.delete)

export default instance