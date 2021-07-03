"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLineText = void 0;
const react_1 = __importDefault(require("react"));
const localize_1 = require("../localize");
const TextField_1 = require("../../atoms/TextField");
const use_memoized_1 = require("@solariera/use-memoized");
const Component = (props) => {
    const { t } = localize_1.useTranslation();
    /**
     * 値を書き換えるプロパティ
     * 初期値をここで指定するプロパティ
     * スタイルに渡さないプロパティ
     */
    const { fontFamily, text = '', translate = true, ...textProps } = props;
    /**
     * 翻訳機能がONの場合は、それぞれの国のフォントに切り替える
     */
    const fontFamilyName = translate && fontFamily ? t(fontFamily) : fontFamily;
    /**
     * テキスト情報は翻訳判定後のものを使う
     */
    const viewText = translate ? t(text) : text;
    /**
     * メモ化したオブジェクトを生成する
     */
    const textFieldProps = use_memoized_1.useMemoized({
        ...textProps,
        fontFamily: fontFamilyName,
        text: viewText,
    });
    return <TextField_1.TextField {...textFieldProps}/>;
};
exports.SingleLineText = react_1.default.memo(Component);
