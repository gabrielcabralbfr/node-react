import { Connection, createConnection, getRepository } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { CreateTravelerController } from "./create-traveler.controller";
import { CreateTravelerUseCase } from "./create-traveler.usecase";
let createTravelerController

createConnection().then(connection => {
    const repo = connection.getRepository(Traveler)
    const useCase = new CreateTravelerUseCase(repo)
    createTravelerController = new CreateTravelerController(useCase)

})

export { createTravelerController }