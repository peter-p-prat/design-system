import React from "react";

import {LoaderIcon} from "@app/Foundations";
import {className} from "@app/shared/helpers";

import styles from "./Loader.module.scss";

export enum LoaderSizes {
    EXTRA_SMALL = "extra-small",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    EXTRA_LARGE = "extra-large",
}

export enum LoaderType {
    LINE_SIMPLE = "line-simple",
    LINE_SPINNER = "line-spinner",
    DOT_CIRCLE = "dot-circle",
}

export interface LoaderProps {
    size?: LoaderSizes;
    type?: LoaderType;
    label?: string;
    color?: string;
    backgroundColor?: string;
    isLoading: boolean;
}

export const Loader = ({
    size = LoaderSizes.MEDIUM,
    type = LoaderType.LINE_SPINNER,
    color = "",
    backgroundColor = "",
    label = "",
    isLoading = true,
}: LoaderProps) => {
    if (!isLoading) return null;

    return (
        <div className={className(styles.loader, styles[size])}>
            <span className={styles.spinner}>
                <LoaderIcon type={type} color={color} backgroundColor={backgroundColor} />
            </span>
            {label && <p>{label}</p>}
        </div>
    );
};
