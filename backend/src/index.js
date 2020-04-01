const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(routes);

app.use(cors({
    
    origin: 'http://localhost:3333',
    credentials: true
  }));


app.listen(3333);




/**
 * localhost/users = rota/recurso
 * Métodos HTTP:
 * 
 *  GET: Buscar dado do back-end
 *  POST: Enviar dado ao back-end
 *  PUT: Alterar dado no back-end
 *  DELETE: deletar dado no back-end
 *
 * 
 * Tipos de parâmetros:
 *  Query: Parâmetros nomeados enviados na rota após o símbolo de interrogação e geralmente eles servem para filtros, paginação;
 *  Route Params: Parâmetros usados para identificar e buscar em recursos. Ex.: app.get('/users/:id') o parâmetro passado será o id dos usuários ('/users/3/');
 *  Request Body: O formato do request. Ex.: Json;
 * 
 * Banco de dados:
 *  SQLite; 
 *  Driver: SELECT * FROM Users;
 *  Query Builder: usa javascript;
 */