import React, {CSSProperties} from "react";

import spinnerStyles from "./SpinnerIcon.module.scss";

interface Props {
    color?: string;
}

export const DotCircleSpinnerIcon = ({color}: Props) => {
    return (
        <div className={spinnerStyles.dotSpinnerContainer}>
            <span
                className={spinnerStyles.dotSpinner}
                style={
                    {
                        "--color": color,
                    } as CSSProperties
                }
            />
        </div>
    );
};
