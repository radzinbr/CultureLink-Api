import user from '../../models/Usermodel.js'

const GetUpd = async (req, res) => {
    try {
        const userData = req.body
        const [Result] = await user.GetUpdate(userData)
        if (Result.affectedRows === 1) [
            res.json({
                success: "usuario atualizado com sucesso",
                user: {
                    ...userData
                }
            })
        ]
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "erro no servidor" })
    }
}

export default GetUpd ;