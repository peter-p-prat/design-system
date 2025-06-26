import React, {PropsWithChildren} from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./SwitchBackgroundWrapper.module.scss";

interface Props {
    isVisible?: boolean;
}

export const SwitchBackgroundWrapper = ({isVisible, children}: PropsWithChildren<Props>) => {
    return (
        <section className={className(styles.switchBackgroundWrapper, conditionalClass([styles.isVisible, !!isVisible]))}>{children}</section>
    );
};
