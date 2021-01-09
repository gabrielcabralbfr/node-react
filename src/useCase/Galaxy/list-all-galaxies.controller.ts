import { Request, Response } from "express";
import { ListAllGalaxiesUseCase } from "./list-all-galaxies.usecase";

export class ListAllGalaxiesController {
    /**
     *
     */
    constructor(private useCase: ListAllGalaxiesUseCase) {

    }
    async handle(request: Request, response: Response) {
        const galaxies = await this.useCase.execute()

        return response.status(200).json({ galaxies })

    }
}