// src/infrastructure/models/educationalContentModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/database';

export interface EducationalContentAttributes {
    id: number;
    title: string;
    description: string;
    content: string;
    mediaUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface EducationalContentCreationAttributes extends Optional<EducationalContentAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class EducationalContentModel extends Model<EducationalContentAttributes, EducationalContentCreationAttributes> implements EducationalContentAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public content!: string;
    public mediaUrl!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

EducationalContentModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    mediaUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'EducationalContent',
    tableName: 'educational_contents',
});

export default EducationalContentModel;