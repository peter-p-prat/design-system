import React, {CSSProperties, useMemo} from "react";

import {spacingsMap} from "@app/Foundations";
import {className} from "@app/shared/helpers";

import styles from "./Divider.module.scss";

export enum DividerType {
    SOLID = "solid",
    DASHED = "dashed",
}

export enum DividerOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}

export interface DividerProps {
    type?: DividerType;
    width?: number;
    containerWidth?: number | string;
    orientation?: DividerOrientation;
    color?: string;
    gap?: string;
    customClassName?: string;
}

export const Divider = ({
    type = DividerType.SOLID,
    width = 1,
    orientation = DividerOrientation.HORIZONTAL,
    color = "",
    gap = "gap-1",
    containerWidth = "100%",
    customClassName = "",
}: DividerProps) => {
    const {gaps} = spacingsMap;
    const dividerGap = gaps?.find((g) => g.name === gap);
    const dividerContainerWidth = useMemo(
        () => (typeof containerWidth === "number" ? `${String(containerWidth)}px` : containerWidth),
        [containerWidth],
    );

    if (!dividerGap) {
        throw new Error(
            `Invalid gap, please select one from the spacing component. Available options are: ${gaps?.map((g) => g.name)?.join(", ") ?? ""}`,
        );
    }

    return (
        <div className={className(styles.divider, styles[orientation], customClassName)}>
            <hr
                className={className(styles.dividerLine, styles[orientation])}
                style={
                    {
                        "--color": color,
                        "--spacing": dividerGap.value,
                        "--border-style": type,
                        "--divider-width": `${String(width)}px`,
                        "--divider-container-width": dividerContainerWidth,
                    } as CSSProperties
                }
            />
        </div>
    );
};
