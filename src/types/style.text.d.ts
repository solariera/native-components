/**
 * テキスト系コンポーネントのインターフェイス
 */
declare type TextType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  width: number;
  height: number;
  bgColor?: string;
  bgColorAlpha?: number;
  roundSize?: number | number[];
  textAlign?: string;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: number;
  fontSize: number;
  fontColor?: string;
  fontColorAlpha?: number;
  strokeWidth?: number;
  strokeColor?: string;
  strokeColorAlpha?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  letterSpacing?: number;
  opacity?: number;
  disable?: boolean;
  disabledStyle?: Partial<DisabledTextStyle>;
};

/**
 * テキストプロパティをstyled-componentsに渡すときの型
 * ※marginはそのままだと使えないのでmarginSizeにリネーム
 */
declare type TextStyleType = Omit<TextType, 'disable' | 'disabledStyle'>;

/**
 * テキストプロパティの必要項目を全て任意にした型
 */
declare type DisabledTextStyle = Partial<Omit<TextType, 'disable' | 'disabledStyle'>>;

export { TextType, TextStyleType, DisabledTextStyle };
