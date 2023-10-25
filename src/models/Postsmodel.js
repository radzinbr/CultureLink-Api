import db from '../database/db.js'


const GetPost = async (id) => {

    return await db.query("SELECT public_id,content,likes FROM publication WHERE id =?", [id])

}

const PostUpdate = async (user) => {

    const { id, content, dir } = user
    return await db.query("UPDATE publication SET content=?,dir = ?  WHERE id = ?", [content, dir, id])

}

const PostAdd = async (content, dir) => {

    return await db.query("INSERT INTO publication (content,dir) VALUES (?,?) ", [content, dir])

}

const PostDel = async (id) => {

    return await db.query("DELETE FROM publication  WHERE id = ? ", [id])

}

const PostAll = async (id) => {
    // Pega todo os dados de um ID e exibe para o pesquisador
    return await db.query('SELECT * FROM publication  ', [id]);

}
export default { GetPost, PostUpdate, PostAdd, PostDel, Postall }