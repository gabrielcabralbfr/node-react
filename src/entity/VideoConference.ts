import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Planet } from "./Planet";

@Entity()
export class VideoConference {

    @PrimaryGeneratedColumn()
    videoConferenceId: number;

    @Column()
    link: string;
    
    @ManyToOne(() => Planet, planet => planet.galaxy)
    planet: Promise<Planet>;

}
