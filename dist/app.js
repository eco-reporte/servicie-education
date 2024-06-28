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
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./infraestructure/config/database"));
const educationalContentRoutes_1 = __importDefault(require("./interfaces/routes/educationalContentRoutes"));
// Crear una instancia de Express
const app = (0, express_1.default)();
// Middleware para parsear JSON
app.use(express_1.default.json());
// Rutas
app.use('/educational-content', educationalContentRoutes_1.default);
// Sincronizar modelos y establecer conexión a la base de datos
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.authenticate();
            console.log('Conexión a la base de datos establecida correctamente.');
            // Sincronizar los modelos
            console.log('Modelos sincronizados correctamente.');
            // Iniciar el servidor
            const PORT = parseInt(process.env.PORT || '3005', 10);
            const IP_ADDRESS = '15.0.11.104'; // Cambiar por la IP deseada
            app.listen(PORT, IP_ADDRESS, () => {
                console.log(`Servidor corriendo en http://${IP_ADDRESS}:${PORT}`);
            });
        }
        catch (error) {
            console.error('Error al conectar a la base de datos:', error);
        }
    });
}
// Iniciar la aplicación
startServer();
exports.default = app;
