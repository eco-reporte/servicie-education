"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Función para conectar a la base de datos y sincronizar modelos (opcional)
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Autenticar la conexión
            yield sequelize.authenticate();
            console.log('Connection to the database has been established successfully.');
            // Sincronización de modelos (crea tablas si no existen)
            yield sequelize.sync();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
// Llama a la función para conectar a la base de datos
connectDatabase();
exports.default = sequelize;
