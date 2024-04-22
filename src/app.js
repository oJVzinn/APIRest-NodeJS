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
            res.status(422).send(err)
            throw err
        }

        res.status(201).send("User created!")
    })
})

instance.delete("/users/:id", (req, res)=> {
    let sql = "DELETE FROM users WHERE id=?"
    db.query(sql, req.params.id, (err, result)=> {
        if (err) {
            res.status(404).send(err)
            throw err
        }

        res.status(204).send("User removed!")
    })
})


instance.put("/users/:id", (req, res) => {
    let sql = "UPDATE users SET name=?, username=?, password=?, age=?"
    let body = req.body
    db.query(sql, [body.name, body.username, body.password, body.age], (err, result)=> {
        if (err) {
            res.status(404).send(err)
            throw err
        }

        res.status(204).send("User has been updated sucessfully")
    })
})

/*
function findUserByID(id) {
    const foundUser = users.find(user => user.id == id);
    return foundUser || null;
}

function findIndexUser(user) {
    return users.findIndex(userFilter => userFilter === user) || -1
}
*/

export default instance