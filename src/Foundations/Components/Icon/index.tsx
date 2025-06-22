import React, {CSSProperties} from "react";

import {icons, IconName} from "@app/Foundations";

import {className} from "@app/shared/helpers";

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

export const Icon = ({
    name,
    title,
    size,
    customClassName = "",
    useInlineColors,
    strokeColor,
    fillColor,
}: IconProps) => {
    if ((icons as any)[name]) {
        return (
            <span
                role="img"
                aria-label={title}
                title={title}
                className={className(styles.icon, customClassName, {
                    [styles.withInlineColors]: !!useInlineColors,
                })}
                style={
                    {
                        "--icon-size":
                            size &&
                            (typeof size === "number" ? `${size}px` : size),
                        "--icon-stroke-color": strokeColor,
                        "--icon-fill-color": fillColor,
                    } as CSSProperties
                }
            >
                {(icons as any)[name]}
            </span>
        );
    }

    return null;
};
