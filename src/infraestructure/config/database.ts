import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT as any, // Asserting non-null and correct type
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT), // Convert string to number
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
});


// Función para conectar a la base de datos y sincronizar modelos (opcional)
async function connectDatabase() {
    try {
      // Autenticar la conexión
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
  
      // Sincronización de modelos (crea tablas si no existen)
        await sequelize.sync();
  
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  
// Llama a la función para conectar a la base de datos
connectDatabase();

export default sequelize;
