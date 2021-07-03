"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initReactI18next = exports.useTranslation = void 0;
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
Object.defineProperty(exports, "useTranslation", { enumerable: true, get: function () { return react_i18next_1.useTranslation; } });
Object.defineProperty(exports, "initReactI18next", { enumerable: true, get: function () { return react_i18next_1.initReactI18next; } });
exports.default = i18next_1.default;
