"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchableFrame = void 0;
const react_1 = __importDefault(require("react"));
const use_memoized_1 = require("@solariera/use-memoized");
const native_style_1 = require("@solariera/native-style");
const native_style_2 = require("@solariera/native-style");
const native_style_3 = require("@solariera/native-style");
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
    const { children, onPress, disable = false, disabledStyle, ...frameProps } = props;
    /**
     * 無効化時のスタイルを呼び出す
     */
    const disabled = use_memoized_1.useMemoized(disable ? { ...disabledStyle } : {});
    /**
     * フレームのプロパティ
     */
    const styleProps = use_memoized_1.useMemoized({
        ...frameProps,
        left: left === -1 ? undefined : left,
        right: right === -1 ? undefined : right,
        top: top === -1 ? undefined : top,
        bottom: bottom === -1 ? undefined : bottom,
        ...disabled,
    });
    /**
     * onPressが存在しな場合は、オブジェクトだけを返す
     */
    if (!onPress)
        return (<Frame {...styleProps} disabled={disable}>
        {children}
      </Frame>);
    /**
     * onPressが有効な場合は、onPressを付与したフレームを返す
     */
    return (<Frame onPress={onPress} {...styleProps} disabled={disable}>
      {children}
    </Frame>);
};
const Frame = styled_1.styled.TouchableOpacity `
  ${(props) => native_style_1.flexBasicStyle({ ...props })}
  ${(props) => native_style_1.flexContainerStyle({ ...props })}
  ${(props) => native_style_3.sizeStyle({ ...props })}

  ${(props) => native_style_2.borderStyle({ ...props })}
  ${(props) => native_style_2.colorStyle({ ...props })}
  ${(props) => native_style_2.marginStyle({ ...props })}
  ${(props) => native_style_3.paddingStyle({ ...props })}
  ${(props) => native_style_2.opacityStyle({ ...props })}
  ${(props) => native_style_3.positionStyle({ ...props })}
  ${(props) => native_style_3.roundStyle({ ...props })}
`;
exports.TouchableFrame = react_1.default.memo(Component);
