import React from "react";

import {className} from "@app/shared/helpers";

import styles from "./ButtonBackgroundWrapper.module.scss";

export interface ButtonBackgroundWrapperProps {
    isActive: boolean;
    children: React.ReactNode;
}

export const ButtonBackgroundWrapper = ({isActive, children}: ButtonBackgroundWrapperProps) => {
    return <section className={className({[styles.buttonBackgroundWrapper]: isActive})}>{children}</section>;
};
