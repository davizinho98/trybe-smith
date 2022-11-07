# Trybesmith

Projeto da [Trybe](https://www.betrybe.com/ "Trybe") - API para gestão de uma loja feita em Node.js.

## Descrição

Foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) de uma loja (produtos e vendas), utilizando TypeScript e a biblioteca mysql2 para realizar buscas e inserção no banco de dados.

## Tecnologias

- Node.js
- Typescript
- Express

## Execute o projeto

### Após clonar o projeto, instale as dependências:
`npm install`

------------

### Rodando com Docker:
Rode os serviços `node` e `db` com o comando:

`docker-compose up -d`

Popule o banco de dados com o comando:

`npm run restore`

Inicie a aplicação com o comando:

`npm start`

------------

### Rodando sem Docker:
Certifique-se de que você tenha o `node` instalado e uma conexão com o banco de dados MySQL na sua máquina.

Configure um arquivo `.env` na raíz do projeto com as seguintes variáveis de ambiente:

    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=password

Popule o banco de dados com o comando:

`npm run restore`

Inicie a aplicação com o comando:

`npm start`

------------

Agora você pode fazer uma requisição a qualquer rota da API.
