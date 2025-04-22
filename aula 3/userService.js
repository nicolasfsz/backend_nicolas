const User = require("./user"); 
const path = require('path'); //modulo para manipular caminhos
const fs = require('fs'); //modulo para manipular arquivos file system
const { json } = require("stream/consumers");
const mysql = require("./mysql"); 
const bcrypt = require('bcryptjs');
const { get } = require("http");


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

    async getUsers(id){
        try{
        const resultado = await mysql.execute(
            `SELECT idusuario FROM usuarios WHERE idusuario = ?`,
            {id}
        );
        return resultado; 
    } catch (erro) {
        console.log('erro ao chamar o usuario');
    }
        
    }

    async deleteUser(id){
        try{
            const user = await this.getUsers(id);
            if(user.length == 0) {
                console.log ('Usuário não encontrado');
                return;
            }
            const resultado = await mysql.execute(
                `DELETE FROM usuarios WHERE idusuario = ?`,
                [id]
            );
            return resultado;
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