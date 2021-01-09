import { Request, Response } from "express";
import { Traveler } from "../../entity/Traveler";
import { CreateTravelerDTO } from "./create-traveler.DTO";
import { CreateTravelerUseCase } from "./create-traveler.usecase";

export class CreateTravelerController {
    /**
     *
     */
    constructor(private CreateTravelerUseCase: CreateTravelerUseCase) { }

    public async handle(request: Request, response: Response) {
        // TODO: Validar
        // TODO: Hash password
        const traveler = await this.CreateTravelerUseCase.execute(request.body)
        return response.status(201).json({ traveler })

    }
}