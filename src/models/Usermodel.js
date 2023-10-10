import db from '../database/db.js'


const GetUserId = async (id) => {
    return await db.query("SELECT Nome,Img,Senha FROM users WHERE id =?", [id]
    )
}

const GetUpdate = async (id,Nome,Img,Senha) => {
    return await db.query("UPDATE users SET Nome=?, Img =?,Senha = ? WHERE id = ?", [Nome,Img, Senha, id])
}

export default {GetUserId,GetUpdate}