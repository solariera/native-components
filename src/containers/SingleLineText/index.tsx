import React from 'react';
import { useMemoized } from '@solariera/use-memoized';
import { useTranslation } from '../localize';
import { TextField, Props as TextFieldProps } from '../../atoms/TextField';

export type Props = TextFieldProps & {
  text?: string;
  translate?: boolean;
};

const Component: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  /**
   * 値を書き換えるプロパティ
   * 初期値をここで指定するプロパティ
   * スタイルに渡さないプロパティ
   */
  const { fontFamily, text = '', translate = true, ...textProps } = props;

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
  const textFieldProps: TextFieldProps = useMemoized({
    ...textProps,
    fontFamily: fontFamilyName,
    text: viewText,
  });

  return <TextField {...textFieldProps} />;
};

export const SingleLineText = React.memo(Component);
