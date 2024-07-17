"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFormData = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
const handleFormData = (req, res, next) => {
    upload.none()(req, res, (err) => {
        if (err) {
            console.error('Error processing form data:', err);
            return res.status(400).json({ error: 'Error processing form data' });
        }
        next();
    });
};
exports.handleFormData = handleFormData;
