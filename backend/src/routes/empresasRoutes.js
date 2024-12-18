import express from "express";
import empresasController from "../controllers/empresaController.js";

const routes = express.Router();

// Rota GET para fazer o login
routes.post("/login",empresasController.requisicaoLogin);
//Rota POST para cadastro de empresa
routes.post("/registro-empresa",empresasController.requisicaoRegistro);
//Rota DELETE para remover a empresa
routes.delete("/remove-empresa",empresasController.requisicaoDeletar);
//Rota POST para pesquisar o usuário ou empresa
routes.post("/search",empresasController.requisicaoBuscar);

export default routes;