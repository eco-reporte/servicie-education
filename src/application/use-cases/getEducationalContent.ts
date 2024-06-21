import { EducationalContentService } from "../services/educationalContent";

export const getEducationalContent = async (id: number) => {
    const educationalContentService = new EducationalContentService();
    return await educationalContentService.get(id);
};
