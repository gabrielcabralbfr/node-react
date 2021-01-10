import { createConnection, getRepository } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { CreateTravelerController } from "./create-traveler.controller";
import { CreateTravelerUseCase } from "./create-traveler.usecase";
let createTravelerController

createConnection().then(connection => {
    const travelerRepository = connection.getRepository(Traveler)
    const createTravelerUseCase = new CreateTravelerUseCase(travelerRepository)
    createTravelerController = new CreateTravelerController(createTravelerUseCase)

})

export { createTravelerController }