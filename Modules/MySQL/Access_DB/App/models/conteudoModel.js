module.exports = function(){
    this.getConteudo = function(connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend' ", callback);
    }

    return this;
}