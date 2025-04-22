const User = require("./user"); 
const path = require('path'); //modulo para manipular caminhos
const fs = require('fs'); //modulo para manipular arquivos file system
const { json } = require("stream/consumers");
const mysql = require("./mysql"); 
const bcrypt = require('bcryptjs');


class userService{
   

    async addUser(nome, email, senha, endereco, telefone, cpf){
        try{  
        const senhaCripto = await bcrypt.hash(senha, 10);
       
        const resultados = await mysql.execute(
            `insert into usuarios (nome,email,endereco,telefone,senha,cpf)  
            Values( ?, ?, ?, ?, ?, ?);`,
            [nome, email, endereco, telefone, senhaCripto , cpf]
        );
        return resultados;
        
      } catch (erro) {
            console.log('erro ao cadastrar o usuario');
            throw erro; //lança o erro para o controller
        }
       
    }

    getUsers(){
        try{
        return this.users
    } catch (erro) {
        console.log('erro ao chamar o usuario');
    }
        
    }

    deleteUser(id){
        try{
            this.users = this.users.filter(user => user.id !== id);
            this.saveUsers();
        }catch(erro){
            console.log('Erro ao deletar usuário', erro)
        }
    }

    async putUser(id, nome, email, senha, endereco, telefone, cpf) {
        try {
                const senhaCripto = await bcrypt.hash(senha, 10);
                const resultados = await mysql.execute(
                `UPDATE usuarios
                    SET nome        = ?, 
                        email       = ?,
                        endereco    = ?,
                        telefone    = ?,
                        senha       = ?,
                        cpf         = ?
                  WHERE idusuario   = ?;`,
                [ nome, email, endereco, telefone, senhaCripto, cpf, id]);
            return resultados;
        } catch (erro) {
            console.log('Erro na função putUser', erro);
    }
}
}
module.exports = new userService;