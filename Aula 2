//classe base usuario
class Usuario {
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this._senha = senha; //atributo privado
    }

    autenticar(senha){
        return senha == this._senha;
    }

    alterarSenha(novaSenha){
        this._senha = novaSenha;
        console.log('Senha alterada com sucesso');
    }

}

//classe admin que herda de usuario
class Admin extends Usuario {
    constructor(nome, email, senha, nivelAcesso) {
        super(nome, email, senha); //chama o construtor de classe
        this.nivelAcesso = nivelAcesso;
    }

    banirUsuario(usuario){
    console.log(`${usuario.nome} foi banido pelo admin ${this.nome}`)
    }

    //polimorfismo sobrepondo o metodo autenticar
    autenticar(senha){
        return senha === this._senha && this.nivelAcesso === 'alto';
    }


}
//exemplo de uso

const usuario1 = new Usuario('Luiz', 'luiz@gmail.com', '1234');
const usuario2 = new Admin('Maria', 'maria@gmail.com', '6789', 'alto');
console.log(usuario1.autenticar('1234'));
console.log(usuario2.autenticar('6789'));
usuario2.banirUsuario(usuario1);
