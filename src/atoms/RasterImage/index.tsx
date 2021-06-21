import React from 'react';

import { styled } from '../../styled';
import { ImageType, ImageStyleType } from '../../types/image.native';

import { marginStyle, opacityStyle } from '@solariera/native-style/src/object';
import { paddingStyle, positionStyle, sizeStyle } from '@solariera/native-style/src/object';
import { useMemoizedObject } from '@solariera/use-memoized/src';

export type Props = ImageType;

type StyleProps = ImageStyleType;

const Component: React.FC<Props> = (props: Props) => {
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
  const disabled = useMemoizedObject(disable ? { ...disabledStyle } : {});

  /**
   * イメージのプロパティ
   */
  const styleProps: StyleProps = useMemoizedObject({
    ...imageProps,
    left: left === -1 ? undefined : left,
    right: right === -1 ? undefined : right,
    top: top === -1 ? undefined : top,
    bottom: bottom === -1 ? undefined : bottom,
    ...disabled,
  });

  return <Image {...styleProps} />;
};

const Image = styled.Image<StyleProps>`
  ${(props: StyleProps) => positionStyle({ ...props })}
  ${(props: StyleProps) => sizeStyle({ ...props })}
  ${(props: StyleProps) => marginStyle({ ...props })}
  ${(props: StyleProps) => paddingStyle({ ...props })}
  ${(props: StyleProps) => opacityStyle({ ...props })}
`;

export const RasterImage = React.memo(Component);
