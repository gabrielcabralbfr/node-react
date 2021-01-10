import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Planet } from "./Planet";

@Entity()
export class VideoConference {

    @PrimaryGeneratedColumn()
    id_videoconference: number;

    @Column()
    link: string;
    
    @ManyToOne(() => Planet, planet => planet.galaxy, {
        eager: true
    })
    planet: Promise<Planet>;

}
