import express from 'express'
import User from './user.js'
import db from './infra/db.js'

const instance = express()

instance.use(express.json())

instance.get("/users", (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, result)=> {
        if (err) {
            res.status(404).send(err)
            throw err
        }

        res.status(200).json(result)
    })
})


instance.get("/users/:id", (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM users WHERE id=?"
    db.query(sql, id, (err, result)=> {
        if (err) {
            res.status(404).send(err)
            throw err
        }

        res.status(200).send(result[0])
    })
})

instance.post("/users/create", (req, res)=> {
    let body = req.body
    const sql = "INSERT INTO users(name, age, username, password) VALUES(?,?,?,?)"
    db.query(sql, [body.name, body.age, body.username, body.password], (err, result)=> {
        if (err) {
            res.status(422)
            throw err
        }

        res.status(201)
    })
})

/*
instance.delete("/users/:id", (req, res)=> {
    let user = findUserByID(req.params.id)
    if (user != null) {
        users.splice(findIndexUser(user))
        res.status(204).send("Usuário deletado com sucesso!")
        return
    }

    res.status(204).send("Nenhum usuário com esse ID foi encontrado!")
})

instance.put("/users/:id", (req, res) => {
    let user = findUserByID(req.params.id)
    if (user === null) {
        res.status(400).send("Usuário não encontrado")
        return
    }

    let body = res.body
    let indexUser = users[findIndexUser(user)]
    indexUser.name = body.name
    indexUser.username = body.username
    indexUser.password = body.password
    indexUser.age = body.age
    res.status(204).send("Usuário atualizado com sucesso!")
})

function findUserByID(id) {
    const foundUser = users.find(user => user.id == id);
    return foundUser || null;
}

function findIndexUser(user) {
    return users.findIndex(userFilter => userFilter === user) || -1
}

*/
export default instance