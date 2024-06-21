import { EducationalContentRepositoryImpl } from './repositories/educationalContentRepositoryImpl';
import { EducationalContentService } from '../application/services/educationalContentService';

const educationalContentRepository = new EducationalContentRepositoryImpl();
const educationalContentService = new EducationalContentService(educationalContentRepository);

export { educationalContentService };
