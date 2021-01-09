import { Repository } from "typeorm";
import { Galaxy } from "../../entity/Galaxy";

export class ListAllGalaxiesUseCase {
    /**
     *
     */
    constructor(private repository: Repository<Galaxy>) { }

    async execute() {
        return await this.repository.find()
    }
}