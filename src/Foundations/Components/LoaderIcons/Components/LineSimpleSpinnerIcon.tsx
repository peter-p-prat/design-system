import React, {CSSProperties} from "react";

import styles from "./SpinnerIcon.module.scss";

interface Props {
    color?: string;
    backgroundColor?: string;
}

export const LineSimpleSpinnerIcon = ({color, backgroundColor}: Props) => {
    return (
        <svg className={styles.spinner} viewBox="0 0 100 100" style={{"--color": color} as CSSProperties}>
            <circle
                className={styles.spinnerBackground}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                strokeWidth="10"
                style={
                    {
                        "--background-color": backgroundColor,
                    } as CSSProperties
                }
            />
            <circle cx="50" cy="50" r="40" fill="none" strokeLinecap="round" strokeWidth="10" strokeDasharray="50 200" />
        </svg>
    );
};
