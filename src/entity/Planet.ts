import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Galaxy } from "./Galaxy";

@Entity()
export class Planet {

    @PrimaryGeneratedColumn()
    id_planet: number;

    @Column()
    name: string;

    @Column()
    conference_link: string;

    @ManyToOne(() => Galaxy, galaxy => galaxy.planets)
    galaxy: Promise<Galaxy>;

}
