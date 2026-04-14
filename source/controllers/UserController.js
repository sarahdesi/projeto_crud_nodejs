import user from '../models/user.js'
import User from '../models/user.js'


//listar usuarios
async function getUsers(request, response) {
    const users = await User.find()

    return response.status(200).json(users)
}

//criar novoc usuarios
async function creatUser(request, response) {
    const user = request.body
    const newUser = await User.create(user)

    return response.status(201).json(newUser)
}

//deletar usuario
async function deleteUser(request, response){
    const id = request.params.id

    await User.findByIdAndDelete({ _id: id })

    return response.status(200).json({response: "User deleted"})
}

//atualizar usuario
async function patchUser(request, response) {
    try {
        const id = request.params.id;
        const dadosParaAtualizar = request.body;

        const userUpdated = await User.findByIdAndUpdate(
            id, 
            dadosParaAtualizar, 
            { new: true, runValidators: true }
        );

        // 2. Verifica se o usuário existia
        if (!userUpdated) {
            return response.status(404).json({ erro: "Usuário não encontrado" });
        }

        // 3. Retorna o sucesso e o objeto atualizado
        return response.status(200).json({
            mensagem: 'Usuário atualizado com sucesso',
            user: userUpdated
        });

    } catch (error) {
        // Se o ID enviado não for um formato válido de ObjectId do MongoDB, cairá aqui
        return response.status(400).json({ 
            erro: 'Erro na atualização', 
            detalhes: error.message 
        });
    }
}
    





export { creatUser, getUsers, deleteUser,patchUser }
