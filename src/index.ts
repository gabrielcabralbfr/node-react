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
    // const user = new Traveler();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(Traveler);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
