import user from '../../models/userModels.js'


const Listall = async (req, res) => {
    try {
        const userData = req.body
        const [rows] = await user.Listall(userData)
    
            res.json({
                success:"usuario encontrado com sucesso",
                user:rows
            })
        }

catch (error) {
    console.log(error)
    res.status(500).json({ error: "erro no servidor" })
}
}
export default Listall;