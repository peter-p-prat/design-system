import React, {PropsWithChildren} from "react";

import {RadioButtonAppearance} from "@app/Atoms";
import {className} from "@app/shared/helpers";

import styles from "./RadioButtonStoryWrapper.module.scss";

interface RadioButtonStoryWrapperProps {
    theme: RadioButtonAppearance;
}

export const RadioButtonStoryWrapper = ({theme, children}: PropsWithChildren<RadioButtonStoryWrapperProps>) => {
    return <div className={className(styles.wrapper, styles[theme])}>{children}</div>;
};
