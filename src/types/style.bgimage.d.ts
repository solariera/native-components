import React from 'react';
import { ImageURISource, ImageResizeMode } from 'react-native';

/**
 * イメージ系コンポーネントのインターフェイス
 */
declare interface BgImageType {
  children: React.ReactNode;
  left?: number;
  top?: number;
  width: number;
  height: number;
  source: ImageURISource;
  resizeMode: ImageResizeMode;
}

/**
 * イメージプロパティをstyled-componentsに渡すときの型
 * ※marginはそのままだと使えないのでmarginSizeにリネーム
 */
declare type BgImageStyleType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  width: number;
  height: number;
};

export { BgImageType, BgImageStyleType };
