import React from 'react';
import { styled } from '../../styled';
import { flexBasicStyle, flexContainerStyle } from '@solariera/native-style/src/flex';
import { borderStyle, colorStyle, marginStyle, opacityStyle } from '@solariera/native-style/src/object';
import { paddingStyle, positionStyle, roundStyle, sizeStyle } from '@solariera/native-style/src/object';
import { FrameType, FrameStyleType } from '../../types/style.frame';
import { useMemoizedObject } from '@solariera/use-memoized/src';

export type Props = FrameType & {};

type StyleProps = FrameStyleType;

const ViewFrame: React.FC<Props> = (props: Props) => {
  /**
   * 値を書き換えるプロパティ
   * プロパティ名を差し替えるプロパティ
   */
  const { left, right, top, bottom } = props;

  /**
   * 初期値をここで指定するプロパティ
   * スタイルに渡さないプロパティ
   */
  const { children, disable = false, disabledStyle, ...frameProps } = props;

  /**
   * 無効化時のスタイルを呼び出す
   */
  const disabled = useMemoizedObject(disable ? { ...disabledStyle } : {});

  /**
   * フレームのプロパティ
   */
  const styleProps: StyleProps = useMemoizedObject({
    ...frameProps,
    left: left === -1 ? undefined : left,
    right: right === -1 ? undefined : right,
    top: top === -1 ? undefined : top,
    bottom: bottom === -1 ? undefined : bottom,
    ...disabled,
  });

  return <Frame {...styleProps}>{children}</Frame>;
};

const Frame = styled.View<StyleProps>`
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

export default React.memo(ViewFrame);