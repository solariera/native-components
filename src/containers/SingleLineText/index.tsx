import React from 'react';

import { useTranslation } from '../localize';
import { TextField, Props as TextFieldProps } from '../../atoms/TextField';
import { useMemoizedObject } from '@solariera/use-memoized/src';

export type Props = TextFieldProps & {
  text?: string;
  translate?: boolean;
};

const Component: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  /**
   * 値を書き換えるプロパティ
   * プロパティ名を差し替えるプロパティ
   */
  const { left, right, top, bottom, fontFamily } = props;

  /**
   * 初期値をここで指定するプロパティ
   * スタイルに渡さないプロパティ
   */
  const { text = '', translate = true, ...textProps } = props;

  /**
   * 翻訳機能がONの場合は、それぞれの国のフォントに切り替える
   */
  const fontFamilyName: string | undefined = translate && fontFamily ? t(fontFamily) : fontFamily;

  /**
   * テキスト情報は翻訳判定後のものを使う
   */
  const viewText = translate ? t(text) : text;

  /**
   * メモ化したオブジェクトを生成する
   */
  const textFieldProps: TextFieldProps = useMemoizedObject({
    ...textProps,
    fontFamily: fontFamilyName,
    text: viewText,
  });

  return <TextField {...textFieldProps} />;
};

export const SingleLineText = React.memo(Component);
