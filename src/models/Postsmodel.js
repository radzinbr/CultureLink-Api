import db from '../database/db.js'


const GetPost = async (user_id) => {

    return await db.query("SELECT public_id ,content,likes FROM publications WHERE user_id =?", [user_id])

}

const PostUpdate = async (user) => {

    const { public_id,content, dir } = user
    return await db.query("UPDATE publications SET content=?,dir = ?  WHERE public_id = ?", [content, dir, public_id])

}

const PostAdd = async (content, dir) => {

    return await db.query("INSERT INTO publications (content,dir) VALUES (?,?) ", [content, dir])

}

const PostDel = async (public_id) => {

    return await db.query("DELETE FROM publications  WHERE public_id = ? ", [public_id])

}

const PostAll = async () => {
    // Pega todo os dados de um ID e exibe para o pesquisador
    return await db.query('SELECT * FROM publications ');

}
export default { GetPost, PostUpdate, PostAdd, PostDel, PostAll }