const getPost = async (req, res) => {
    try {
        const PostData = req.body
        const [rows] = await post.getPost(PostData.id)
        if(rows.length === 0){
            res.status(404).json({
                error:`Post de id: ${PostData,id} não encontrado!`
            })
        }else {
            res.json({
                success:"Post encontrado com sucesso",
                user:rows[0]
            })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}