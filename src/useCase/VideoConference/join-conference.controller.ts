import { Request, Response } from "express";
import { JoinVideoConferenceUseCase } from "./join-conference.usecase";

export class JoinVideoConferenceController {
    constructor(private useCase: JoinVideoConferenceUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const conference = await this.useCase.execute(request.body)
        return response.status(200).json(conference)

    }
}