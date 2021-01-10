import { createConnection, getRepository } from "typeorm";
import { VideoConference } from "../../entity/VideoConference";
import { JoinVideoConferenceController } from "./join-conference.controller";
import { JoinVideoConferenceUseCase } from "./join-conference.usecase";
let joinVideoConferenceController

createConnection().then(connection => {
    const repo = connection.getRepository(VideoConference)
    const useCase = new JoinVideoConferenceUseCase(repo)
    joinVideoConferenceController = new JoinVideoConferenceController(useCase)

})

export { joinVideoConferenceController }