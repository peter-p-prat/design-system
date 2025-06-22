import React from "react";

import styles from "./CardStoryContent.module.scss";

export const CardStoryContent = () => {
    return (
        <section className={styles.cardStoryContent}>
            <p>I`m the card content.</p>
            <p>I can be text, image, both or anything else like a custom component. </p>
        </section>
    );
};
