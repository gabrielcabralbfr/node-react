import { Repository } from "typeorm";
import { VideoConference } from "../../entity/VideoConference";
import { JoinConferenceDTO } from "./join-conference.DTO";

export class JoinVideoConferenceUseCase {
    /**
     *
     */
    constructor(private videoConferenceRepository: Repository<VideoConference>) { }
    
    async execute(data: JoinConferenceDTO): Promise<VideoConference> {
        const [conference] = await this.videoConferenceRepository.find({ where: { videoConferenceId: data.videoConferenceId } })
        return conference
    }
}