import { EducationalContentService } from "../services/educationalContent";

export const deleteEducationalContent = async (id: number) => {
    const educationalContentService = new EducationalContentService();
    return await educationalContentService.delete(id);
};
