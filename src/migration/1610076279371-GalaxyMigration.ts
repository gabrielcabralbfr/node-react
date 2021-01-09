import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class GalaxyMigration1610076279371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "galaxy",
            columns: [
                {
                    name: "id_galaxy",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "order",
                    type: "int"
                },

            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("galaxy")

    }

}
