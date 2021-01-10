import { Repository } from "typeorm";
import { Galaxy } from "../../entity/Galaxy";

export class ListAllGalaxiesUseCase {
    /**
     *
     */
    constructor(private galaxyRepository: Repository<Galaxy>) { }

    async execute() {
        return await this.galaxyRepository.find()
    }
}