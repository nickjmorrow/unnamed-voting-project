import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 35432,
    username: 'devuser',
    password: 'pass',
    database: 'postgres',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
    },
};

console.log(ormconfig);

export = ormconfig;
