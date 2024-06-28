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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Adapter = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class S3Adapter {
    constructor() {
        this.s3 = new aws_sdk_1.default.S3();
    }
    uploadFile(bucket, key, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Bucket: bucket,
                Key: key,
                Body: body
            };
            return this.s3.upload(params).promise();
        });
    }
    getFile(bucket, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Bucket: bucket,
                Key: key
            };
            return this.s3.getObject(params).promise();
        });
    }
}
exports.S3Adapter = S3Adapter;
