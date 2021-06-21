import React from 'react';

import { styled } from '../../styled';
import { BgImageType, BgImageStyleType } from '../../types/style.bgimage';

import { positionStyle, sizeStyle } from '@solariera/native-style/src/object';
import { useMemoizedObject } from '@solariera/use-memoized/src';

export type Props = BgImageType;

type StyleProps = BgImageStyleType;

const BackgroundImage: React.FC<Props> = (props: Props) => {
  const { children, left, top, width, height, source, resizeMode } = props;

  /**
   * ImageResizeModeのオブジェクト
   */
  const imageStyle = useMemoizedObject({ resizeMode });

  /**
   * 背景のスタイルに渡すプロパティ
   */
  const backgroundProps = useMemoizedObject({ left, top, width, height, source, imageStyle });

  return <BackgroundView {...backgroundProps}>{children}</BackgroundView>;
};

/**
 * TODO ImageBackgroudFrameをいずれ作る
 */
const BackgroundView = styled.ImageBackground<StyleProps>`
  ${(props: StyleProps) => positionStyle({ ...props })}
  ${(props: StyleProps) => sizeStyle({ ...props })}
`;

export default React.memo(BackgroundImage);
