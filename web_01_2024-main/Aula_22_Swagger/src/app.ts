import express from 'express'; 
import { cadastrarProduto, atualizarProduto, deletarProduto, filtrarProduto, listarTodosProduto } from './controller/ProductController';

const app = express();

const PORT = 3040;

app.use(express.json());

const apiRouter = express.Router();
RegisterRoutes(apiRouter);

app.use('/api', apiRouter);

RegisterRoutes(app);

setupSwagger(app);

app.post("/api/product", cadastrarProduto)
app.put("/api/product", atualizarProduto)
app.delete("/api/product", deletarProduto)
app.get("/api/product", filtrarProduto)
app.get("/api/product/all", listarTodosProduto)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));