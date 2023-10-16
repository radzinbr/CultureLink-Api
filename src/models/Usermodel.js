import db from '../database/db.js'


const GetUserId = async (id) => {
    return await db.query("SELECT Nome,email,Img,Senha FROM users WHERE id =?", [id]
    )
}

const UserUpdate = async (user) => {
    const { id, Nome, email , Img , Senha } = user
    return await db.query("UPDATE users SET Nome=?, email=?, Img =?,Senha =? WHERE id = ?", [Nome,email,Img, Senha, id])
}

const Useradd = async (Nome,email,Img,Senha) => {

    return await db.query("INSERT INTO users (Nome,email,Img,Senha) VALUES (?,?,?,?) ",[Nome,email,Img,Senha])
}

const Del = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ? ",[id])
}

export default {GetUserId,UserUpdate,Useradd,Del}