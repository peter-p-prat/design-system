import React from "react";

import styles from "./PopoverStoryContentElement.module.scss";

export const PopoverStoryContentElement: React.FC = () => {
    return (
        <div className={styles.popoverStoryContentElement}>
            <p>Elemento</p>
            <p>Elemento</p>
            <p>Elemento</p>
            <p>Elemento</p>
        </div>
    );
};
