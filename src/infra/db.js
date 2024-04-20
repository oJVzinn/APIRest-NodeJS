import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test'
})

// Ele conecta com o sevidor MySQL
connection.connect((err)=> {
    if (err) {
        console.log("Ocorreu um erro enquanto conectavamos ao MySQL...")
        return
    }

    console.log("Sucesso ao conectar ao MySQL!")
})

//Cria a tabela inicial
const sql = "CREATE TABLE IF NOT EXISTS users (id BIGINT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(32), username VARCHAR(32), password VARCHAR(32), age INT)"
connection.query(sql, (err) => {
    if (err) throw err
})

export default connection