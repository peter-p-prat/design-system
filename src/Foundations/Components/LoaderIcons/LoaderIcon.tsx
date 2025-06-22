import React from "react";

import {LoaderType} from "@app/Atoms";
import {DotCircleSpinnerIcon, LineSimpleSpinnerIcon, LineSpinnerIcon} from "@app/Foundations";

export interface LoaderIconProps {
    type: LoaderType;
    color?: string;
    backgroundColor?: string;
}

export const LoaderIcon = ({type, color, backgroundColor}: LoaderIconProps) => {
    const loaderIconsMap: Record<LoaderType, React.JSX.Element> = {
        [LoaderType.LINE_SPINNER]: <LineSpinnerIcon color={color} />,
        [LoaderType.LINE_SIMPLE]: <LineSimpleSpinnerIcon color={color} backgroundColor={backgroundColor} />,
        [LoaderType.DOT_CIRCLE]: <DotCircleSpinnerIcon color={color} />,
    };

    return loaderIconsMap[type];
};
