-- Schema SQL para o FortEvents

-- Tabela de Categorias
CREATE TABLE Categoria (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de Eventos
CREATE TABLE Evento (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    local VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    horario VARCHAR(50) NOT NULL,
    preco VARCHAR(50),
    contato VARCHAR(255),
    imagem_url TEXT,
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);
