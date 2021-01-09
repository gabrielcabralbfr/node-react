import { createConnection } from "typeorm";
import { Galaxy } from "../../entity/Galaxy";
import { ListAllGalaxiesController } from "./list-all-galaxies.controller";
import { ListAllGalaxiesUseCase } from "./list-all-galaxies.usecase";

let listAllGalaxiesController
createConnection().then((connection) => {
    const repo = connection.getRepository(Galaxy)
    const useCase = new ListAllGalaxiesUseCase(repo)
    listAllGalaxiesController = new ListAllGalaxiesController(useCase)
})

export { listAllGalaxiesController }