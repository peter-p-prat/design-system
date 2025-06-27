import React from "react";

import {className} from "@app/shared";

import styles from "./LargeModalChildren.module.scss";

export const LargeModalChildren = () => {
    return (
        <div className={className(styles.largeModalChildren)}>
            {Array.from({length: 10}).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={className(styles.text)}>
                    This is the body of the modal
                </div>
            ))}
            <div className={className(styles.lastText)}>This is the last</div>
        </div>
    );
};
