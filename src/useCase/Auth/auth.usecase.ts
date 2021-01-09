import { Repository } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { AuthDTO } from "./auth.DTO";

export class AuthUseCase {
    /**
     *
     */
    constructor(private repository: Repository<Traveler>) { }
    async execute(data: AuthDTO): Promise<any> {
        const traveler = await this.repository.find({ where: { email: data.email } })
        return traveler
    }
    
}