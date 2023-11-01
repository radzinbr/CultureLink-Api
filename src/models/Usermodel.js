import db from '../database/db.js'


const GetUserId = async (id) => {
    return await db.query("SELECT nome,email,img,senha FROM users WHERE id =?", [id]
    )
}


const getByEmail = async (email) => {
    return await db.query("SELECT * FROM users Where email = ?;", [email])
}

const UserUpdate = async (user) => {
    const { id, Nome, email , Img , Senha } = user
    return await db.query("UPDATE users SET nome=?, email=?, img =?,senha =? WHERE id = ?", [Nome,email,Img, Senha, id])
}

const Useradd = async (Nome,Img,Senha,email) => {

    return await db.query("INSERT INTO users (nome, img, senha, email) VALUES (?,?,?,?) ",[Nome,Img,Senha,email])
}

const Del = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ? ",[id])
}

const all = async (id) => {
    // Pega todo os dados de um ID e exibe para o pesquisador
     return await db.query('SELECT * FROM users ', [id]);

  }
export default {GetUserId,getByEmail,UserUpdate,Useradd,Del,all}