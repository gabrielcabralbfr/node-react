import "reflect-metadata";
import { createConnection } from "typeorm";

import express from 'express'
import { router } from "./routes";


const app = express()
app.use(express.json())

app.use(router)
app.listen(3333, () => console.log("Server started on port 3333"))

createConnection().then(async connection => {
    console.log("Connection created...");

}).catch(error => console.log(error));
