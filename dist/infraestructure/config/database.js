"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '211218',
    database: 'db_eco_reporte',
    logging: false // Puedes habilitar o deshabilitar el logging
});
exports.default = sequelize;
