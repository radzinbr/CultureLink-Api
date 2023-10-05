import db from '../database/db.js'


const GetUserId = async (id) => {
    return await db.query("SELECT Nome FROM users WHERE id =?", [id]
    )
}
export default {GetUserId}