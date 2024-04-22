import db from '../database/db.js'

class UserController {

    index(req, res) {
        const sql = "SELECT * FROM users"
        db.query(sql, (err, result)=> {
            if (err) {
                res.status(404).send(err)
                throw err
            }
    
            res.status(200).json(result)
        })
    }

    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM users WHERE id=?"
        db.query(sql, id, (err, result)=> {
            if (err) {
                res.status(404).send(err)
                throw err
            }
    
            res.status(200).send(result[0])
        })
    }

    store(req, res) {
        let body = req.body
        const sql = "INSERT INTO users(name, age, username, password) VALUES(?,?,?,?)"
        db.query(sql, [body.name, body.age, body.username, body.password], (err, result)=> {
            if (err) {
                res.status(422).send(err)
                throw err
            }
    
            res.status(201).send("User created!")
        })
    }

    update(req, res) {
        let sql = "UPDATE users SET name=?, username=?, password=?, age=?"
        let body = req.body
        db.query(sql, [body.name, body.username, body.password, body.age], (err, result)=> {
            if (err) {
                res.status(404).send(err)
                throw err
            }
    
            res.status(204).send("User has been updated sucessfully")
        })
    }

    delete(req, res) {
        let sql = "DELETE FROM users WHERE id=?"
        db.query(sql, req.params.id, (err, result)=> {
            if (err) {
                res.status(404).send(err)
                throw err
            }
    
            res.status(204).send("User removed!")
        })
    }

}

export default new UserController()