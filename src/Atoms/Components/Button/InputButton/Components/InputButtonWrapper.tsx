import React from "react";

import styles from "./InputButtonWrapper.module.scss";

export interface InputButtonWrapperProps {
    children: React.ReactNode;
}

const InputButtonWrapper = ({children}: InputButtonWrapperProps) => {
    return <div className={styles.inputButtonWrapper}>{children}</div>;
};

export default InputButtonWrapper;
