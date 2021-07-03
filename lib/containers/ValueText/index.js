"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueText = void 0;
const react_1 = __importDefault(require("react"));
const use_memoized_1 = require("@solariera/use-memoized");
const localize_1 = require("../localize");
const TextField_1 = require("~/atoms/TextField");
const editNumber_1 = require("./editNumber");
const alignDigit_1 = require("./alignDigit");
const Component = (props) => {
    const { t } = localize_1.useTranslation();
    /**
     * 初期値をここで指定するプロパティ
     * スタイルに渡さないプロパティ
     */
    const { fontFamily, value = '', limit, denominator, comma = false, translate = false, digit = 0, plusMarkEnable = false, separator = '/', ...textProps } = props;
    /**
     * 翻訳機能がONの場合は、それぞれの国のフォントに切り替える
     */
    const fontFamilyName = translate && fontFamily ? t(fontFamily) : fontFamily;
    /**
     * 最終的に表示させる文字列
     */
    let viewValue = '';
    if (digit) {
        /**
         * 桁揃えオプションが有効(1桁以上)の場合は、こちらの処理を優先する。
         * 最大値を超えたときの処理(9,999+など)は行わない。併用できない。
         */
        viewValue = alignDigit_1.alignDigit(value, digit);
    }
    else {
        /**
         * 桁揃えオプションが無効の場合は、最大値越え処理や、カンマ区切り処理を行う。
         * 文字列の場合はそのまま表示させる。
         * 小数点のけたぞろえには対応していない。
         * TODO: 小数点の扱いをどうするかまた考える
         */
        viewValue = typeof value === 'number' ? editNumber_1.editNumber(value, limit, comma) : value;
    }
    /**
     * プラスマークフラグがtrueでvalueが1以上であれば+を先頭に付ける
     */
    viewValue = plusMarkEnable && typeof value === 'number' && value > 0 ? '+' + viewValue : viewValue;
    /**
     * translateモードが有効なら翻訳して格納する
     */
    viewValue = translate ? t(viewValue) : viewValue;
    /**
     * 分母が存在する場合は末尾に追加する
     */
    viewValue += denominator !== undefined ? separator + denominator : '';
    /**
     * メモ化したオブジェクトを生成する
     */
    const textFieldProps = use_memoized_1.useMemoized({
        ...textProps,
        fontFamily: fontFamilyName,
        text: viewValue,
    });
    return <TextField_1.TextField {...textFieldProps}/>;
};
exports.ValueText = react_1.default.memo(Component);
