import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Traveler {

    @PrimaryGeneratedColumn()
    id_traveler: number;

    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    avatar: string;

    @Column()
    password: string;

}
