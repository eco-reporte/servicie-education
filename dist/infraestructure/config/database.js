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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables de entorno
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize({
    dialect: process.env.DB_DIALECT, // Asserting non-null and correct type
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // Convert string to number
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
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
