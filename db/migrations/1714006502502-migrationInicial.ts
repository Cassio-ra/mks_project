import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrationInicial1714006502502 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        password VARCHAR NOT NULL,
        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email)
      );
      CREATE TABLE movies (
        id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        synopsis TEXT NOT NULL,
        user_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        poster TEXT NULL,
        CONSTRAINT "FK_abcdef" FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE movies;');
    await queryRunner.query('DROP TABLE users;');
  }
}
