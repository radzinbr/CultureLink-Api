import user from "../../models/Usermodel.js";


const Userdel = async (req, res) => {
    try {
        const userData = req.body;
        const [rows] = await user.GetUserId(userData.id);
        if (rows.length === 0) {
            res.status(404).json({
                error: `Usuário id: ${userData.id} não encontrado!`
            });
        } else {
            await user.Del(userData.id);

            res.json({
                success: "Usuário excluído com sucesso"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro no servidor" });
    }
};

export default Userdel;
