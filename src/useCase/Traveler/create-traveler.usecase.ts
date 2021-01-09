import { Repository } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { CreateTravelerDTO } from "./create-traveler.DTO";

export class CreateTravelerUseCase {
    /**
     *
     */
    constructor(private repository: Repository<Traveler>) { }

    async execute(travelerDTO: CreateTravelerDTO): Promise<Traveler> {
        const traveler = await this.repository.create(travelerDTO)
        const reto = await this.repository.save(traveler)
        return reto

    }
}