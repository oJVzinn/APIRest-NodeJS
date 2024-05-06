import { Router } from "express";
import userController from './app/controller/userController.js'

const router = new Router()

router.post("/users/create", userController.store)
router.get("/users", userController.index)
router.get("/users/:id", userController.show)
router.put("/users/:id", userController.update)
router.delete("/users/:id", userController.delete)

export default router