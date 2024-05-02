import { response } from 'express'
import UserRepository from '../repositories/usersRepository.js'

class UserController {

    async index(req, res) {
        const response = await UserRepository.findAll()
        res.send(response)
    }

    async show(req, res) {
        const response = await UserRepository.findByID(req.params.id)
        res.send(response)
    }

    async store(req, res) {
        const body = req.body
        const reponse = await UserRepository.create(body.name, body.age, body.username, body.password)
        res.send(response)
    }

    async update(req, res) {
        const body = req.body
        const reponse = await UserRepository.update(body.name, body.age, body.username, body.password)
        res.send(response)
    }

    async delete(req, res) {
        const response = await UserRepository.delete(req.params.id)
        res.send(response)
    }

}

export default new UserController()