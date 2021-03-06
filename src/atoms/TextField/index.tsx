import React from 'react';
import { useMemoized } from '@solariera/use-memoized';
import { colorStyle, marginStyle, opacityStyle } from '@solariera/native-style';
import { paddingStyle, positionStyle, sizeStyle } from '@solariera/native-style';
import { fontColorStyle, fontFamilyStyle, fontSizeStyle } from '@solariera/native-style';
import { placementStyle, letterSpacingStyle, textStrokeStyle } from '@solariera/native-style';
import { styled } from '../../styled';
import { TextType, TextStyleType } from '../../types/text';

export type Props = TextType & {
  text?: string;
};

type StyleProps = TextStyleType;

const Component: React.FC<Props> = (props: Props) => {
  /**
   * 値を書き換えるプロパティ
   * プロパティ名を差し替えるプロパティ
   */
  const { left, right, top, bottom } = props;

  /**
   * 初期値をここで指定するプロパティ
   * スタイルに渡さないプロパティ
   */
  const { text = '', disable = false, disabledStyle, ...textProps } = props;

  /**
   * 無効化時のスタイルを呼び出す
   */
  const disabled = useMemoized(disable ? { ...disabledStyle } : {});

  /**
   * テキストフィールドのプロパティ
   */
  const styleProps: StyleProps = useMemoized({
    ...textProps,
    left: left === -1 ? undefined : left,
    right: right === -1 ? undefined : right,
    top: top === -1 ? undefined : top,
    bottom: bottom === -1 ? undefined : bottom,
    ...disabled,
  });

  return <TextArea {...styleProps}>{text}</TextArea>;
};

const TextArea = styled.Text<StyleProps>`
  /* オブジェクトのスタイル */
  ${(props: StyleProps) => positionStyle({ ...props })}
  ${(props: StyleProps) => sizeStyle({ ...props })}
  ${(props: StyleProps) => colorStyle({ ...props })}
  ${(props: StyleProps) => marginStyle({ ...props })}
  ${(props: StyleProps) => paddingStyle({ ...props })}
  ${(props: StyleProps) => opacityStyle({ ...props })}

  /* テキストのスタイル */
  ${(props: StyleProps) => fontColorStyle({ ...props })}
  ${(props: StyleProps) => fontFamilyStyle({ ...props })}
  ${(props: StyleProps) => fontSizeStyle({ ...props })}
  ${(props: StyleProps) => placementStyle({ ...props })}
  ${(props: StyleProps) => letterSpacingStyle({ ...props })}
  ${(props: StyleProps) => textStrokeStyle({ ...props })}
`;

export const TextField = React.memo(Component);
