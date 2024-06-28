"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("../../infraestructure/dependencies");
class EducationalContentController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, content } = req.body;
                if (!title || !description || !content) {
                    return res.status(400).json({ error: 'Title, description, and content are required' });
                }
                const contentData = {
                    title,
                    description,
                    content
                };
                const createdContent = yield dependencies_1.educationalContentService.create(contentData);
                res.status(201).json(createdContent);
            }
            catch (error) {
                console.error('Error in create method:', error);
                res.status(500).json({ error: error.message });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id)) {
                    return res.status(400).json({ error: 'Invalid ID' });
                }
                const content = yield dependencies_1.educationalContentService.get(id);
                if (content) {
                    res.status(200).json(content);
                }
                else {
                    res.status(404).json({ error: 'Content not found' });
                }
            }
            catch (error) {
                console.error('Error in get method:', error);
                res.status(500).json({ error: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id)) {
                    return res.status(400).json({ error: 'Invalid ID' });
                }
                const { title, description, content } = req.body;
                const updateData = {};
                if (title !== undefined)
                    updateData.title = title;
                if (description !== undefined)
                    updateData.description = description;
                if (content !== undefined)
                    updateData.content = content;
                if (Object.keys(updateData).length === 0) {
                    return res.status(400).json({ error: 'No valid update data provided' });
                }
                const updatedContent = yield dependencies_1.educationalContentService.update(id, updateData);
                if (updatedContent) {
                    res.status(200).json(updatedContent);
                }
                else {
                    res.status(404).json({ error: 'Content not found' });
                }
            }
            catch (error) {
                console.error('Error in update method:', error);
                res.status(500).json({ error: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id)) {
                    return res.status(400).json({ error: 'Invalid ID' });
                }
                yield dependencies_1.educationalContentService.delete(id);
                res.status(204).send();
            }
            catch (error) {
                console.error('Error in delete method:', error);
                res.status(500).json({ error: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contents = yield dependencies_1.educationalContentService.getAll();
                res.status(200).json(contents);
            }
            catch (error) {
                console.error('Error in getAll method:', error);
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = new EducationalContentController();
