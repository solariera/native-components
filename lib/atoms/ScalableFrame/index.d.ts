import React from 'react';
import { FrameType } from '../../types/frame';
export declare type Props = FrameType & {
    defaultScale?: number;
    activeScale?: number;
    onPress?: () => void;
};
export declare const ScalableFrame: React.NamedExoticComponent<Props>;
