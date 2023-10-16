import e from 'express'
import user from '../../models/Usermodel.js'

const create = async (req,res) => {
    try{
        const userData = req.body
        const [result] = await user.Useradd(userData.Nome,userData.Img,userData.Senha,userData.email)
        if(result.affectedRows === 1){
            res.json({
                success:"usuario inserido com sucesso",
                user:{
                    id:result.insertId,
                    ...userData
                }
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}

export default create; 
