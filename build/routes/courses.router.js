"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courses_service_1 = __importDefault(require("../services/courses.service"));
const router = express_1.default.Router();
const service = new courses_service_1.default();
router.get('/', (_req, res) => {
    const courses = service.list();
    res.send(courses);
});
exports.default = router;
