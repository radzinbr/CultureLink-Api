import db from '../database/db.js'


const GetUserId = async (user_id) => {
    return await db.query("SELECT nome,email,img,senha FROM users WHERE user_id =?", [user_id]
    )
}


const getByEmail = async (email) => {
    return await db.query("SELECT * FROM users Where email = ?;", [email])
}

const UserUpdate = async (user) => {
    const { user_id, Nome, email , Img , Senha } = user
    return await db.query("UPDATE users SET nome=?, email=?, img =?,senha =? WHERE user_id = ?", [Nome,email,Img, Senha, user_id])
}

const Useradd = async (Nome,Img,Senha,email) => {

    return await db.query("INSERT INTO users (nome, img, senha, email) VALUES (?,?,?,?) ",[Nome,Img,Senha,email])
}

const Del = async (user_id) => {
    return await db.query("DELETE FROM users WHERE user_id = ? ",[user_id])
}

const all = async (user_id) => {
    // Pega todo os dados de um ID e exibe para o pesquisador
     return await db.query('SELECT * FROM users ', [user_id]);

  }
export default {GetUserId,getByEmail,UserUpdate,Useradd,Del,all}