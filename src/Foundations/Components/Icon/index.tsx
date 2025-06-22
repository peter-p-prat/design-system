import React, {CSSProperties} from "react";

import {className, conditionalClass} from "@app/shared";

import {IconName, icons} from "./icons";

import styles from "./Icon.module.scss";

export interface IconProps {
    name: IconName;
    title?: string;
    size?: string | number;
    customClassName?: string;
    useInlineColors?: boolean;
    strokeColor?: string;
    fillColor?: string;
}

export const Icon = ({name, title, size, customClassName = "", useInlineColors, strokeColor, fillColor}: IconProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if ((icons as any)[name]) {
        return (
            <span
                role="img"
                aria-label={title}
                title={title}
                className={className(styles.icon, customClassName, conditionalClass([styles.withInlineColors, !!useInlineColors]))}
                style={
                    {
                        "--icon-size": size && (typeof size === "number" ? `${String(size)}px` : size),
                        "--icon-stroke-color": strokeColor,
                        "--icon-fill-color": fillColor,
                    } as CSSProperties
                }
            >
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                {(icons as any)[name]}
            </span>
        );
    }

    return null;
};

export * from "./icons";
