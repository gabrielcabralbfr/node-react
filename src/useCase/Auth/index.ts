import { createConnection } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { AuthController } from "./auth.controller";
import { AuthUseCase } from "./auth.usecase";
let authController
createConnection().then(connection => {
    const repo = connection.getRepository(Traveler)
    const useCase = new AuthUseCase(repo)
    authController = new AuthController(useCase)
})

export { authController }