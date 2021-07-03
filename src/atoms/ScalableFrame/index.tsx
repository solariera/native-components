import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { useMemoized } from '@solariera/use-memoized';
import { flexBasicStyle, flexContainerStyle } from '@solariera/native-style';
import { borderStyle, colorStyle, marginStyle, opacityStyle } from '@solariera/native-style';
import { paddingStyle, positionStyle, roundStyle, sizeStyle } from '@solariera/native-style';
import { styled } from '~/styled';
import { FrameType, FrameStyleType } from '~/types/frame';

export type Props = FrameType & {
  defaultScale?: number;
  activeScale?: number;
  onPress?: () => void;
};

type StyleProps = FrameStyleType & {
  defaultScale?: number;
  activeScale?: number;
};

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
  const { children, onPress, disable = false, disabledStyle, activeScale = 0.9, ...frameProps } = props;

  /**
   * 無効化時のスタイルを呼び出す
   */
  const disabled = useMemoized(disable ? { ...disabledStyle } : {});

  /**
   * フレームのプロパティ
   */
  const styleProps: StyleProps = useMemoized({
    ...frameProps,
    left: left === -1 ? undefined : left,
    right: right === -1 ? undefined : right,
    top: top === -1 ? undefined : top,
    bottom: bottom === -1 ? undefined : bottom,
    activeScale,
    ...disabled,
  });

  /**
   * onPressが存在しな場合は、オブジェクトだけを返す
   */
  if (!onPress)
    return (
      <Frame {...styleProps} disabled={disable}>
        {children}
      </Frame>
    );

  /**
   * onPressが有効な場合は、onPressを付与したフレームを返す
   */
  return (
    <Frame onPress={onPress} {...styleProps} disabled={disable}>
      {children}
    </Frame>
  );
};

const Frame = styled(TouchableScale)<StyleProps>`
  ${(props: StyleProps) => flexBasicStyle({ ...props })}
  ${(props: StyleProps) => flexContainerStyle({ ...props })}
  ${(props: StyleProps) => sizeStyle({ ...props })}

  ${(props: StyleProps) => borderStyle({ ...props })}
  ${(props: StyleProps) => colorStyle({ ...props })}
  ${(props: StyleProps) => marginStyle({ ...props })}
  ${(props: StyleProps) => paddingStyle({ ...props })}
  ${(props: StyleProps) => opacityStyle({ ...props })}
  ${(props: StyleProps) => positionStyle({ ...props })}
  ${(props: StyleProps) => roundStyle({ ...props })}
`;

export const ScalableFrame = React.memo(Component);
