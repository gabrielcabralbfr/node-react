import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class PlanetMigration1610076502125 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "planet",
            columns: [
                {
                    name: "id_planet",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "conference_link",
                    type: "varchar"
                }
            ]
        }), true)

        await queryRunner.createForeignKey("galaxy", new TableForeignKey({
            columnNames: ["id_galaxy"],
            referencedColumnNames: ["id_galaxy"],
            referencedTableName: "galaxy",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("galaxy")
    }

}
