import { Repository } from "typeorm";
import { Traveler } from "../../entity/Traveler";
import { AuthDTO } from "./auth.DTO";
import bcrypt from "bcrypt"
export class AuthUseCase {
    /**
     *
     */
    constructor(private repository: Repository<Traveler>) { }
    
    async execute(data: AuthDTO): Promise<Traveler> {
        const [traveler] = await this.repository.find({ where: { email: data.email } })
        const samePassword = await bcrypt.compare(data.password, traveler.password)
        if (!samePassword) return null
        return traveler
    }

}