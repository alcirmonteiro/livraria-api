import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";
import cors from "cors";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();    
})

routes(app);

export default app