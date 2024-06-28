"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const educationalContentController_1 = __importDefault(require("../controllers/educationalContentController"));
const router = (0, express_1.Router)();
router.post('/', educationalContentController_1.default.create);
router.put('/:id', educationalContentController_1.default.update);
router.delete('/:id', educationalContentController_1.default.delete);
router.get('/all', educationalContentController_1.default.getAll);
exports.default = router;
