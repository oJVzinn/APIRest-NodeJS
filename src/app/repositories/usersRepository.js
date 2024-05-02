import db from '../database/db.js'

class UserRepository {

    create(name, age, username, password) {
        const sql = "INSERT INTO users(name, age, username, password) VALUES(?,?,?,?)"
        return new Promise((resolve, reject)=> {
            db.query(sql, [name, age, username, password], (err, result)=> {
                if (err) return reject(err)
                return resolve(result)
            })
        }) 
    }

    findAll() {
        const sql = "SELECT * FROM users"
        return new Promise((resolve, reject) => {
            db.query(sql, (err, result)=> {
                if (err) return reject(err)
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    findByID(id) {
        const sql = "SELECT * FROM users WHERE id=?"
        return new Promise((resolve, reject) => {
            db.query(sql, id, (err, result)=> {
                if (err) return reject(err)
        
                return resolve(JSON.parse(JSON.stringify(result[0])))
            })
        }) 
    }

    update(name, age, username, password) {
        let sql = "UPDATE users SET name=?, username=?, password=?, age=?"
        return new Promise((resolve, reject)=> {
            db.query(sql, [name, age, username, password], (err, result)=> {
                if (err) return reject(err)
                return resolve(result)
            })
        }) 
    }

    delete(id) {
        let sql = "DELETE FROM users WHERE id=?"
        return new Promise((resolve, reject)=> {
            db.query(sql, id, (err, result)=> {
                if (err) return reject(err)
                return resolve(result)
            })
        })
    }
    
}


export default new UserRepository()