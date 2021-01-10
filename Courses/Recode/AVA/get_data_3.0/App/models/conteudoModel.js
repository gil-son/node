module.exports = function(){
    this.getConteudo = (connection, callback) => {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'",callback);
    }
    return this;
}