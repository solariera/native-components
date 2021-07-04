import React from 'react';
import { FrameType } from '../../types/frame';
export declare type Props = FrameType & {
    onPress?: () => void;
};
export declare const TouchableFrame: React.NamedExoticComponent<Props>;
