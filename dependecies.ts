// src/infraestructure/dependencies.ts

import { EducationalContentService } from "./application/services/educationalContentService";
import { EducationalContentRepositoryImpl } from "./infraestructure/repositories/educationalContentRepositoryImpl";


const educationalContentRepository = new EducationalContentRepositoryImpl();
export const educationalContentService = new EducationalContentService(educationalContentRepository);
