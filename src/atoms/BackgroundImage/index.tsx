import React from 'react';
import { useMemoized } from '@solariera/use-memoized';
import { positionStyle, sizeStyle } from '@solariera/native-style';
import { styled } from '../../styled';
import { BgImageType, BgImageStyleType } from '../../types/bgimage';

export type Props = BgImageType;

type StyleProps = BgImageStyleType;

const Component: React.FC<Props> = (props: Props) => {
  const { children, left, top, width, height, source, resizeMode } = props;

  /**
   * ImageResizeModeのオブジェクト
   */
  const imageStyle = useMemoized({ resizeMode });

  /**
   * 背景のスタイルに渡すプロパティ
   */
  const backgroundProps = useMemoized({ left, top, width, height, source, imageStyle });

  return <BackgroundView {...backgroundProps}>{children}</BackgroundView>;
};

/**
 * TODO ImageBackgroudFrameをいずれ作る
 */
const BackgroundView = styled.ImageBackground<StyleProps>`
  ${(props: StyleProps) => positionStyle({ ...props })}
  ${(props: StyleProps) => sizeStyle({ ...props })}
`;

export const BackgroundImage = React.memo(Component);
