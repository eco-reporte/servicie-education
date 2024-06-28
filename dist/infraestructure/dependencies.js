"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationalContentService = void 0;
const educationalContentRepositoryImpl_1 = require("./repositories/educationalContentRepositoryImpl");
const educationalContentService_1 = require("../application/services/educationalContentService");
const educationalContentRepository = new educationalContentRepositoryImpl_1.EducationalContentRepositoryImpl();
const educationalContentService = new educationalContentService_1.EducationalContentService(educationalContentRepository);
exports.educationalContentService = educationalContentService;
