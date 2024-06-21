import { EducationalContentService } from "../services/educationalContent";

export const updateEducationalContent = async (id: number, data: any) => {
    const educationalContentService = new EducationalContentService();
    return await educationalContentService.update(id, data);
};
