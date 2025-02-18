const express = require("express");
const userService = require ("./userservice");

const app = express();
app.use(express.json());

//rota para criar usuario

app.post("/users", (req, res)=>{
    const {nome, email} = req.body;
    if(!nome || !email){
        return res.status(400).json
        ({error: "nome e email são obrigatorios"})
    }

    const user = UserService.addUser(nome, email);
    res.status(200).json({user});
})

//rota para listar todos os arquivos
app.get("/users", (req, res)=>{
    res.json(UserService.getUsers());
});

const port = 3000;
app.listen(port,() =>{
    console.log("Servidor rodando na porta:", port);
})