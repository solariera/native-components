import React from 'react';
import { Props as TextFieldProps } from '~/atoms/TextField';
export declare type Props = TextFieldProps & {
    value?: string | number;
    limit?: number;
    digit?: number;
    comma?: boolean;
    translate?: boolean;
    denominator?: number | undefined;
    plusMarkEnable?: boolean;
    separator?: string;
};
export declare const ValueText: React.NamedExoticComponent<Props>;
