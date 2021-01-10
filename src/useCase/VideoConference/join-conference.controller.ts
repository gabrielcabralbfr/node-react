import { Request, Response } from "express";
import { JoinVideoConferenceUseCase } from "./join-conference.usecase";

export class JoinVideoConferenceController {
    constructor(private joinVideoConferenceUseCase: JoinVideoConferenceUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const conference = await this.joinVideoConferenceUseCase.execute(request.body)
        return response.status(200).json(conference)

    }
}