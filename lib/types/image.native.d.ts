import { ImageSourcePropType } from 'react-native';
/**
 * イメージ系コンポーネントのインターフェイス
 */
export interface ImageType {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    width: number;
    height: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    opacity?: number;
    alignContent?: string;
    alignItems?: string;
    styleDisplay?: string;
    source: ImageSourcePropType;
    disable?: boolean;
    disabledStyle?: Partial<DisabledImageType>;
}
/**
 * イメージプロパティをstyled-componentsに渡すときの型
 * ※marginはそのままだと使えないのでmarginSizeにリネーム
 */
export declare type ImageStyleType = Omit<ImageType, 'disable' | 'disabledStyle'>;
/**
 * イメージプロパティの必要項目を全て任意にした型
 */
export declare type DisabledImageType = Partial<Omit<ImageType, 'disable' | 'disabledStyle'>>;
