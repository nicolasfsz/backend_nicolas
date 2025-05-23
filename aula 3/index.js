const express = require("express");
const userService = require ("./userservice");

const app = express();
app.use(express.json());

//rota para criar usuario

app.post("/users", async (req, res)=>{
    try{
    const {nome, email, senha, endereco, telefone, cpf} = req.body;
    if(!nome || !email || !senha || !endereco || !telefone || !cpf){
        return res.status(400).json
        ({error: "nome e email são obrigatorios"})
    }
    const user = await userService.addUser(nome, email, senha, endereco, telefone, cpf);
    res.status(200).json({mensagem: "usuario cadastrado com sucesso"});
}catch(erro){
    res.status(500).json({error: erro.message});
}
})


//rota para excluir usuário
app.delete("/users/:id", async (req, res,) => {
    const id = parseInt(req.params.id);
//converte o id para numero
try {
    const resultado = await userService.deleteUser(id);
    //tenta excluir o usuaeio
    if (!resultado) {
        return res.status(406).json({error: "usuario não encontrado"});
    }
     return res.status(200).json(resultado);
    //retorna a mensagem de sucesso
}catch (erro) {
    res.status(404).json({error: erro.message});
    //retorna a mensagem de erro
}
})

//rota para listar todos os arquivos
app.get("/users", (req, res)=>{
    res.json(userService.getUsers());
});

const port = 3000;
app.listen(port,() =>{
    console.log("Servidor rodando na porta:", port);
})

app.put("/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, email, senha, endereco, telefone, cpf} = req.body;
    if(!nome || !email || !senha || !endereco || !telefone || !cpf){
        return res.status(400).json({error: "nome e email são obrigatorios"});
    }
    try {
        const resultado = await userService.putUser(id, nome, email, senha, endereco, telefone, cpf);
        res.status(200).json(resultado);
    } catch (erro) {
        res.status(404).json({error: erro.message});
}})