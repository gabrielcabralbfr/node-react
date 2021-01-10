import { Request, Response } from "express";
import { CreateTravelerUseCase } from "./create-traveler.usecase";

export class CreateTravelerController {
    /**
     *
     */
    constructor(private CreateTravelerUseCase: CreateTravelerUseCase) { }

    public async handle(request: Request, response: Response) {
        const traveler = await this.CreateTravelerUseCase.execute(request.body)
        const { password, ...travelerWithoutPassword } = traveler
        return response.status(201).json(travelerWithoutPassword)
    }
}