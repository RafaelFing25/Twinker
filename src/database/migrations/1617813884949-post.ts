import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class post1617813884949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'biography',
            type: 'varchar',
          },
          {
            name: 'links',
            type: 'varchar',
          },
          {
            name: 'posts',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'posts',
            columnNames: ['posts'],
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'owner',
            type: 'uuid',
          },
          {
            name: 'content',
            type: 'varchar',
          },
          {
            name: 'lamps',
            type: 'uuid',
          },
          {
            name: 'comments',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'owner',
            columnNames: ['owner'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'lamps',
            columnNames: ['lamps'],
            referencedTableName: 'lamps',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'comments',
            columnNames: ['comments'],
            referencedTableName: 'comments',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'lapms',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user',
            type: 'uuid',
          },
          {
            name: 'post',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'user',
            columnNames: ['user'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'post',
            columnNames: ['post'],
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user',
            type: 'uuid',
          },
          {
            name: 'post',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'user',
            columnNames: ['user'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'post',
            columnNames: ['post'],
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('posts');
    queryRunner.dropTable('users');
    queryRunner.dropTable('lamps');
    queryRunner.dropTable('comments');
  }
}
