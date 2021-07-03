"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasterImage = void 0;
const react_1 = __importDefault(require("react"));
const use_memoized_1 = require("@solariera/use-memoized");
const native_style_1 = require("@solariera/native-style");
const native_style_2 = require("@solariera/native-style");
const styled_1 = require("~/styled");
const Component = (props) => {
    /**
     * 値を書き換えるプロパティ
     * プロパティ名を差し替えるプロパティ
     * 画像の初期値に格納するプロパティ
     */
    const { left, right, top, bottom } = props;
    /**
     * スタイルに渡さないプロパティとその他
     */
    const { disable = false, disabledStyle, ...imageProps } = props;
    /**
     * 無効化時のスタイルを呼び出す
     */
    const disabled = use_memoized_1.useMemoized(disable ? { ...disabledStyle } : {});
    /**
     * イメージのプロパティ
     */
    const styleProps = use_memoized_1.useMemoized({
        ...imageProps,
        left: left === -1 ? undefined : left,
        right: right === -1 ? undefined : right,
        top: top === -1 ? undefined : top,
        bottom: bottom === -1 ? undefined : bottom,
        ...disabled,
    });
    return <Image {...styleProps}/>;
};
const Image = styled_1.styled.Image `
  ${(props) => native_style_2.positionStyle({ ...props })}
  ${(props) => native_style_2.sizeStyle({ ...props })}
  ${(props) => native_style_1.marginStyle({ ...props })}
  ${(props) => native_style_2.paddingStyle({ ...props })}
  ${(props) => native_style_1.opacityStyle({ ...props })}
`;
exports.RasterImage = react_1.default.memo(Component);
