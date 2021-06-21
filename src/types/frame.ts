import React from 'react';

/**
 * フレーム系コンポーネントのインターフェイス
 */
export type FrameType = {
  children?: React.ReactNode;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  width: number;
  height: number;
  bgColor?: string;
  bgColorAlpha?: number;
  roundSize?: number | number[];
  borderWidth?: number;
  borderColor?: string;
  borderColorAlpha?: number;
  borderStyle?: string;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  opacity?: number;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  styleDisplay?: string;
  disable?: boolean;
  disabledStyle?: Partial<DisabledFrameType>;
};

/**
 * フレームプロパティをstyled-componentsに渡すときの型
 * ※marginはそのままだと使えないのでmarginSizeにリネーム
 */
export type FrameStyleType = Omit<FrameType, 'children' | 'disable' | 'disabledStyle'>;

/**
 * フレームプロパティの必要項目を全て任意にした型
 */
export type DisabledFrameType = Partial<Omit<FrameType, 'children' | 'disable' | 'disabledStyle'>>;
