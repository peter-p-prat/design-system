import React, {CSSProperties} from "react";

import {spacingsMap} from "@app/Foundations";
import {className, generateSizePropertyValue} from "@app/shared/helpers";

import styles from "./DividerV2.module.scss";

export enum DividerV2Type {
    SOLID = "solid",
    DASHED = "dashed",
}

export enum DividerV2Orientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}

export interface DividerV2Props {
    type?: DividerV2Type;
    width?: number;
    orientation?: DividerV2Orientation;
    dividerLength?: number | string;
    color?: string;
    sidesGap?: string;
    limitsGap?: string;
    customClassName?: string;
}

export const DividerV2 = ({
    type = DividerV2Type.SOLID,
    width = 1,
    orientation = DividerV2Orientation.HORIZONTAL,
    color = "",
    sidesGap = "gap-1",
    limitsGap = "gap-1",
    dividerLength = "100%",
    customClassName = "",
}: DividerV2Props) => {
    const {gaps} = spacingsMap;
    const dividerGap = gaps?.find((g) => g.name === sidesGap);
    const dividerLimitsPadding = gaps?.find((g) => g.name === limitsGap);
    const dividerLengthValue = generateSizePropertyValue(dividerLength);

    return (
        <div className={className(styles.dividerContainer, styles[orientation])}>
            <div
                className={className(styles.dividerLine, styles[orientation], styles[type], customClassName)}
                style={
                    {
                        "--color": color,
                        "--divider-sides-padding": dividerGap?.value ?? "0",
                        "--divider-limits-padding": dividerLimitsPadding?.value ?? "0",
                        "--divider-width": `${String(width)}px`,
                        "--divider-length": dividerLengthValue,
                    } as CSSProperties
                }
            />
        </div>
    );
};
