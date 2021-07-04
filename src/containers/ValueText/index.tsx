import React from 'react';
import { useMemoized } from '@solariera/use-memoized';
import { useTranslation } from '../localize';
import { TextField, Props as TextFieldProps } from '../../atoms/TextField';
import { editNumber } from './editNumber';
import { alignDigit } from './alignDigit';

export type Props = TextFieldProps & {
  value?: string | number;
  limit?: number;
  digit?: number;
  comma?: boolean;
  translate?: boolean;
  denominator?: number | undefined;
  plusMarkEnable?: boolean;
  separator?: string;
};

const Component: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  /**
   * 初期値をここで指定するプロパティ
   * スタイルに渡さないプロパティ
   */
  const {
    fontFamily,
    value = '',
    limit,
    denominator,
    comma = false,
    translate = false,
    digit = 0,
    plusMarkEnable = false,
    separator = '/',
    ...textProps
  } = props;

  /**
   * 翻訳機能がONの場合は、それぞれの国のフォントに切り替える
   */
  const fontFamilyName: string | undefined = translate && fontFamily ? t(fontFamily) : fontFamily;

  /**
   * 最終的に表示させる文字列
   */
  let viewValue: string = '';

  if (digit) {
    /**
     * 桁揃えオプションが有効(1桁以上)の場合は、こちらの処理を優先する。
     * 最大値を超えたときの処理(9,999+など)は行わない。併用できない。
     */
    viewValue = alignDigit(value, digit);
  } else {
    /**
     * 桁揃えオプションが無効の場合は、最大値越え処理や、カンマ区切り処理を行う。
     * 文字列の場合はそのまま表示させる。
     * 小数点のけたぞろえには対応していない。
     * TODO: 小数点の扱いをどうするかまた考える
     */
    viewValue = typeof value === 'number' ? editNumber(value, limit, comma) : value;
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
  const textFieldProps: TextFieldProps = useMemoized({
    ...textProps,
    fontFamily: fontFamilyName,
    text: viewValue,
  });

  return <TextField {...textFieldProps} />;
};

export const ValueText = React.memo(Component);
