import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '211218',
    database: 'db_eco_reporte',
    logging: false // Puedes habilitar o deshabilitar el logging
});

export default sequelize;
