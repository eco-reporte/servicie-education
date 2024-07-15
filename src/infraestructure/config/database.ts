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
