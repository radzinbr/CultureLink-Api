import db from '../database/db.js'


const GetUserId = async (id) => {
    return await db.query("SELECT Nome,Img,Senha FROM users WHERE id =?", [id]
    )
}

const UserUpdate = async (user) => {
    const { id, Nome , Img , Senha } = user
    return await db.query("UPDATE users SET Nome=?, Img =?,Senha =? WHERE id = ?", [Nome,Img, Senha, id])
}

const Useradd = async (Nome,Img,Senha) => {

    return await db.query("INSERT INTO users (Nome,Img,Senha) VALUES (?,?,?) ",[Nome,Img,Senha])
}

const Del = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ? ",[id])
}

export default {GetUserId,UserUpdate,Useradd,Del}