import React, {CSSProperties} from "react";

import styles from "./SpinnerIcon.module.scss";

interface Props {
    color?: string;
}

export const LineSpinnerIcon = ({color}: Props) => {
    return (
        <svg className={styles.spinner} viewBox="0 0 100 100" style={{"--color": color} as CSSProperties}>
            <circle cx="50" cy="50" r="40" fill="none" strokeLinecap="round" strokeWidth="10" strokeDasharray="90" />
        </svg>
    );
};
