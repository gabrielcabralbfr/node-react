import { Repository } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { CreateTravelerDTO } from "./create-traveler.DTO";
import bcrypt from "bcrypt"
export class CreateTravelerUseCase {
    /**
     *
     */
    constructor(private repository: Repository<Traveler>) { }

    async execute(travelerDTO: CreateTravelerDTO): Promise<Traveler> {
        // TODO: Validate
        const traveler = await this.repository.create(travelerDTO)
        traveler.password = await bcrypt.hash(traveler.password, 10)
        const createdTraveler = await this.repository.save(traveler)
        return createdTraveler

    }
}