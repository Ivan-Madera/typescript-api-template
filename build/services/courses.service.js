"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_json_1 = __importDefault(require("./../data/courses.json"));
class CoursesService {
    //   async create () {
    //   }
    list() {
        return courses_json_1.default;
    }
}
exports.default = CoursesService;
