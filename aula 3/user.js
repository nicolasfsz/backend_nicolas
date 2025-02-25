class User{
    constructor(id, nome, email, senha, endereco, telefone, cpf){
        this.id = id; // id do usuario
        this.nome = nome; // nome do usuario
        this.email = email; // email do usuario
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
    }
}

module.exports = User; // exportar o arquivo