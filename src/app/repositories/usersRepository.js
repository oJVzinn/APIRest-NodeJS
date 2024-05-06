import {consult} from '../database/db.js'

class UserRepository {

    create(name, age, username, password) {
        const sql = "INSERT INTO users(name, age, username, password) VALUES(?,?,?,?)"
        return consult(sql, [name, age, username, password])
    }

    findAll() {
        const sql = "SELECT * FROM users"
        return consult(sql)
    }

    findByID(id) {
        const sql = "SELECT * FROM users WHERE id=?"
        return consult(sql, id)
    }

    update(name, age, username, password) {
        let sql = "UPDATE users SET name=?, username=?, password=?, age=?"
        return consult(sql, [name, age, username, password])
    }

    delete(id) {
        let sql = "DELETE FROM users WHERE id=?"
        return consult(sql, id)
    }
    
}

export default new UserRepository()