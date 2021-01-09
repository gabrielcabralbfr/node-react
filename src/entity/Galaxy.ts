import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm";
import { Planet } from "./Planet";

@Entity()
export class Galaxy {

    @PrimaryGeneratedColumn()
    id_galaxy: number;

    @Column()
    name: string;

    @Column()
    order: number;

    @OneToMany(() => Planet, planet => planet.galaxy, {
        eager: true
    })
    planets: Promise<Galaxy[]>;
}
