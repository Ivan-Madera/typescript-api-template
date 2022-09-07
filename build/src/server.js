"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const server = index_1.default.listen(index_1.default.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', index_1.default.get('port'), index_1.default.get('env'));
    console.log('Press CTRL-C to stop\n');
});
exports.default = server;
