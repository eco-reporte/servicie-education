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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalContentRepositoryImpl = void 0;
const educationalContentModel_1 = __importDefault(require("./model/educationalContentModel"));
class EducationalContentRepositoryImpl {
    create(contentData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Assuming you still want to omit id, createdAt, and updatedAt when creating a new record
            const { id, createdAt, updatedAt } = contentData, createData = __rest(contentData, ["id", "createdAt", "updatedAt"]);
            console.log('Creating content with data:', createData);
            const createdContent = yield educationalContentModel_1.default.create(createData);
            console.log('Created content:', createdContent.toJSON());
            return createdContent.toJSON();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield educationalContentModel_1.default.findByPk(id);
            return content ? content.toJSON() : null;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const contents = yield educationalContentModel_1.default.findAll();
            return contents.map(content => content.toJSON());
        });
    }
    update(id, contentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield educationalContentModel_1.default.findByPk(id);
            if (content) {
                yield content.update(contentData);
                return content.toJSON();
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield educationalContentModel_1.default.findByPk(id);
            if (content) {
                yield content.destroy();
            }
        });
    }
    getByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield educationalContentModel_1.default.findOne({ where: { code } });
            return content ? content.toJSON() : null;
        });
    }
}
exports.EducationalContentRepositoryImpl = EducationalContentRepositoryImpl;
