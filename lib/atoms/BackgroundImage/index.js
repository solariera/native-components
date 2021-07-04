"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundImage = void 0;
const react_1 = __importDefault(require("react"));
const use_memoized_1 = require("@solariera/use-memoized");
const native_style_1 = require("@solariera/native-style");
const styled_1 = require("../../styled");
const Component = (props) => {
    const { children, left, top, width, height, source, resizeMode } = props;
    /**
     * ImageResizeModeのオブジェクト
     */
    const imageStyle = use_memoized_1.useMemoized({ resizeMode });
    /**
     * 背景のスタイルに渡すプロパティ
     */
    const backgroundProps = use_memoized_1.useMemoized({ left, top, width, height, source, imageStyle });
    return <BackgroundView {...backgroundProps}>{children}</BackgroundView>;
};
/**
 * TODO ImageBackgroudFrameをいずれ作る
 */
const BackgroundView = styled_1.styled.ImageBackground `
  ${(props) => native_style_1.positionStyle({ ...props })}
  ${(props) => native_style_1.sizeStyle({ ...props })}
`;
exports.BackgroundImage = react_1.default.memo(Component);
