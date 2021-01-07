import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class TravelerMigration1609986153532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "question",
            columns: [
                {
                    name: "id_traveler",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "nickname",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                }
            ]
        }), true)

        await queryRunner.createIndex("question", new TableIndex({
            name: "IDX_TRAVELER_NAME",
            columnNames: ["id_traveler"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("traveler")
    }

}
