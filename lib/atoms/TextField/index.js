"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const react_1 = __importDefault(require("react"));
const use_memoized_1 = require("@solariera/use-memoized");
const native_style_1 = require("@solariera/native-style");
const native_style_2 = require("@solariera/native-style");
const native_style_3 = require("@solariera/native-style");
const native_style_4 = require("@solariera/native-style");
const styled_1 = require("~/styled");
const Component = (props) => {
    /**
     * 値を書き換えるプロパティ
     * プロパティ名を差し替えるプロパティ
     */
    const { left, right, top, bottom } = props;
    /**
     * 初期値をここで指定するプロパティ
     * スタイルに渡さないプロパティ
     */
    const { text = '', disable = false, disabledStyle, ...textProps } = props;
    /**
     * 無効化時のスタイルを呼び出す
     */
    const disabled = use_memoized_1.useMemoized(disable ? { ...disabledStyle } : {});
    /**
     * テキストフィールドのプロパティ
     */
    const styleProps = use_memoized_1.useMemoized({
        ...textProps,
        left: left === -1 ? undefined : left,
        right: right === -1 ? undefined : right,
        top: top === -1 ? undefined : top,
        bottom: bottom === -1 ? undefined : bottom,
        ...disabled,
    });
    return <TextArea {...styleProps}>{text}</TextArea>;
};
const TextArea = styled_1.styled.Text `
  /* オブジェクトのスタイル */
  ${(props) => native_style_2.positionStyle({ ...props })}
  ${(props) => native_style_2.sizeStyle({ ...props })}
  ${(props) => native_style_1.colorStyle({ ...props })}
  ${(props) => native_style_1.marginStyle({ ...props })}
  ${(props) => native_style_2.paddingStyle({ ...props })}
  ${(props) => native_style_1.opacityStyle({ ...props })}

  /* テキストのスタイル */
  ${(props) => native_style_3.fontColorStyle({ ...props })}
  ${(props) => native_style_3.fontFamilyStyle({ ...props })}
  ${(props) => native_style_3.fontSizeStyle({ ...props })}
  ${(props) => native_style_4.placementStyle({ ...props })}
  ${(props) => native_style_4.letterSpacingStyle({ ...props })}
  ${(props) => native_style_4.textStrokeStyle({ ...props })}
`;
exports.TextField = react_1.default.memo(Component);
