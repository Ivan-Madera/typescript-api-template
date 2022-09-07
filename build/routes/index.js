"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courses_router_1 = __importDefault(require("./courses.router"));
const routerApi = (app) => {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    router.use('/courses', courses_router_1.default);
};
exports.default = routerApi;
