import { createConnection } from "typeorm";
import { Galaxy } from "../../entity/Galaxy";
import { ListAllGalaxiesController } from "./list-all-galaxies.controller";
import { ListAllGalaxiesUseCase } from "./list-all-galaxies.usecase";

let listAllGalaxiesController
createConnection().then((connection) => {
    const galaxyRepository = connection.getRepository(Galaxy)
    const listAllGalaxiesUseCase = new ListAllGalaxiesUseCase(galaxyRepository)
    listAllGalaxiesController = new ListAllGalaxiesController(listAllGalaxiesUseCase)
})

export { listAllGalaxiesController }