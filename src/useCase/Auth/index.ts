import { createConnection } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { AuthController } from "./auth.controller";
import { AuthUseCase } from "./auth.usecase";
let authController
createConnection().then(connection => {
    const travelerRepository = connection.getRepository(Traveler)
    const authUseCase = new AuthUseCase(travelerRepository)
    authController = new AuthController(authUseCase)
})

export { authController }