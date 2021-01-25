CREATE DATABASE blog;

CREATE TABLE blog.postagem(
    id int not null auto_increment primary key,
    titulo varchar(80),
    descricao text
)