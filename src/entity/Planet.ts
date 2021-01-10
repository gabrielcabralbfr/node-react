import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { Galaxy } from "./Galaxy";
import { VideoConference } from "./VideoConference";

@Entity()
export class Planet {

    @PrimaryGeneratedColumn()
    id_planet: number;

    @Column()
    name: string;

    @Column()
    conferenceLink: string;

    @ManyToOne(() => Galaxy, galaxy => galaxy.planets)
    galaxy: Promise<Galaxy>;

    @OneToOne(() => Planet, planet => planet.videoConference)
    videoConference: VideoConference

}
