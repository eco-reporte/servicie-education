import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../../config/database';


class EducationalContent extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public content!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

EducationalContent.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'EducationalContent',
    tableName: 'educational_contents'
});

export default EducationalContent;
