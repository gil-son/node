module.exports = function(){

    // Busca todos os usuários sem filtro
    this.getUsuarios = function (connection, callback){

    }   
    
    // Busca usuários por e-mail
    this.getUsuarioId = function (id, connection, callback){
        connection.query("SELECT * FROM usuario WHERE id = " + id, callback);

    }

    // Busca usuários por id
    this.getUsuarioEmail = function (email, connection, callback){
        connection.query("SELECT * FROM usuario WHERE id = " + email, callback);
    }

    // Insere um novo usuário na base
    this.setUsuario = function(usuario, connection, callback){
        connection.query('INSERT INTO usuario SET ?', usuario);
    }

    return this;
}