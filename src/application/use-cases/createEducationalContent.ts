import { EducationalContentService } from "../services/educationalContent";

export const createEducationalContent = async (data: any) => {
    const educationalContentService = new EducationalContentService();
    return await educationalContentService.create(data);
};
