import express from 'express';
import sequelize from './infraestructure/config/database';
import educationalContentRoutes from './interfaces/routes/educationalContentRoutes';

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/educational-content', educationalContentRoutes);

// Sincronizar modelos y establecer conexión a la base de datos
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // Sincronizar los modelos
        console.log('Modelos sincronizados correctamente.');

        // Iniciar el servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos o sincronizar los modelos:', error);
    }
}

// Iniciar la aplicación
startServer();

export default app;
